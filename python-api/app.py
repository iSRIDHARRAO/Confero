from flask import Flask
from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = r"./images/"

ALLOWED_EXTENSIONS = { 'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge'
    response.headers['Cache-Control'] = 'public, max-age=0, no-store'
    return response

@app.route("/predict",methods = ['POST'])
def predict():
     if request.method == 'POST':  
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename)) 
            ext=file.filename.rsplit('.', 1)[1].lower()       
            cmd="python"+" "+r"./script.py"+" "+UPLOAD_FOLDER+file.filename
            
            os.system(cmd)
            if os.path.isfile(r"./images/pred.jpg"):
                output={"status":"yes"},200
                dele=r"./images/pred.jpg"
                os.system(dele)
                return output
            else:
                output={"status":"no"}
                return  output


app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER 

if __name__ == '_main_':
        app.run(host='0.0.0.0')