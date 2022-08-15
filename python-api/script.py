from keras.preprocessing.image import ImageDataGenerator
import numpy as np
from keras.models import load_model
from keras.utils import load_img,img_to_array
import sys,os
import cv2
path=sys.argv[1]

pred_image = load_img(path, target_size=(64,64))
pred_image = img_to_array(pred_image)
pred_image = np.expand_dims(pred_image, axis = 0)
model1=load_model('./BT_MODEL-v1.h5')
result = model1.predict(pred_image)
if result[0][0] == 1:
    prediction = 'yes'
else:
    prediction = 'no'
print(prediction)

img =cv2.imread(path)
image_HSV = cv2.cvtColor(img, cv2.COLOR_BGR2HLS  )
print("Before Saving")
if result[0][0] == 1:
    prediction = 'yes'
    cv2.imwrite("./images/pred.jpg",image_HSV)