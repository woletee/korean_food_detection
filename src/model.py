from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Model

# Function to create and return the model
def create_model(num_classes):
    base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
    x = base_model.output
    x = GlobalAveragePooling2D()(x)
    x = Dense(1024, activation='relu')(x)
    predictions = Dense(num_classes, activation='softmax')(x)
    model = Model(inputs=base_model.input, outputs=predictions)
    for layer in base_model.layers:
        layer.trainable = False
    return model

# Function to preprocess image from file-like object
def preprocess_image(file, target_size=(224, 224)):
    img = Image.open(file)
    img = img.resize(target_size)
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array

# Function to get class labels
def get_class_names():
    return [
        "bibimbap", "bulgogi", "godeungeogui", "jjambbong", "ramyun",
        "yangnyumchicken", "duinjangjjigae", "gamjatang", "gimbap", "jeyukbokkeum",
        "jjajangmyeon", "kalguksu", "kimchijjigae", "mandu", "pajeon",
        "samgyetang", "samgyeopsal", "sundaegukbap", "tteokbokki", "tteokguk"
    ]
