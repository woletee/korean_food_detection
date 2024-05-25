import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from PIL import Image
from flask_cors import CORS

# Initialize the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Load the trained model
model_path = 'C:/Users/dslab/food_saved_model.h5'

if not os.path.exists(model_path):
    print(f"Model file not found at {model_path}")
    raise FileNotFoundError(f"Model file not found at {model_path}")

print(f"Model file found at {model_path}")
model = load_model(model_path)
print("Model loaded successfully")

# Define class names
class_names = [
    "bibimbap", "bulgogi", "godeungeogui", "jjambbong", "ramyun",
    "yangnyumchicken", "duinjangjjigae", "gamjatang", "gimbap", "jeyukbokkeum",
    "jjajangmyeon", "kalguksu", "kimchijjigae", "mandu", "pajeon",
    "samgyetang", "samgyeopsal", "sundaegukbap", "tteokbokki", "tteokguk"
]

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/')
def index():
    return "Food Classification API"

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        img = Image.open(file)
        img = img.resize((224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0

        predictions = model.predict(img_array)
        predicted_class = np.argmax(predictions[0])
        predicted_label = class_names[predicted_class]

        return jsonify({'foodName': predicted_label}), 200
    else:
        return jsonify({'error': 'Invalid file format'}), 400

if __name__ == '__main__':
    app.run(debug=True)
