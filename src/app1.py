import os
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.optimizers import Adam  # Import a standard optimizer
from PIL import Image

# Disable GPU if not needed
os.environ['CUDA_VISIBLE_DEVICES'] = '-1'

# Initialize the Flask app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Ensure the uploads folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Correct the model path format
model_path = 'C:/Users/dslab/Final_food_saved_model.h5'

try:
    print(f"Loading model from {model_path}")
    model = load_model(model_path, compile=False)
    print("Model loaded successfully")
    # Recompile the model with a standard optimizer
    model.compile(optimizer=Adam(), loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    print("Model compiled successfully with Adam optimizer")
except Exception as e:
    print(f"Error loading or compiling model: {e}")
    raise FileNotFoundError(f"Model file not found or could not be loaded from {model_path}")

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
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return render_template('index.html', message='No file part')
    file = request.files['file']
    if file.filename == '':
        return render_template('index.html', message='No selected file')
    if file and allowed_file(file.filename):
        try:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            img = Image.open(file_path)
            img = img.resize((224, 224))
            img_array = image.img_to_array(img)
            img_array = np.expand_dims(img_array, axis=0)
            img_array /= 255.0

            predictions = model.predict(img_array)
            predicted_class = np.argmax(predictions[0])
            predicted_label = class_names[predicted_class]

            return render_template('index.html', prediction=predicted_label)
        except Exception as e:
            print(f"Error during prediction: {e}")
            return render_template('index.html', message='Error processing the image')
    else:
        return render_template('index.html', message='Invalid file format')

if __name__ == '__main__':
    app.run(debug=True)
