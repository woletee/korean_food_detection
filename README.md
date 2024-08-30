# Food Recognition Web Application

This project is a web application that uses a deep learning model (ResNet) to recognize food items from images. The frontend is built with React.js, and the backend is powered by Flask. The application allows users to upload an image of food, and the model predicts the name of the food item.
### [Live Demo of the website click here! ](https://main.dg2f0zi3cpqzs.amplifyapp.com/)

You can visit the deployed application by clicking the link above.
## Interface

![Food Recognition Interface](/Interface.png
)

*Sample image of the Food Recognition web application interface.*

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Model Information](#model-information)
- [Contributing](#contributing)
- [License](#license)

## Features

- Upload an image of food.
- Predict the food item using a deep learning model (ResNet).
- Display the predicted name of the food item.
- Responsive web design.

## Project Structure

The project is organized as follows:


## Installation

### Prerequisites

- **Python 3.6+**
- **Node.js**
- **npm (Node Package Manager)**
## Model Information

- **Model Used**: **ResNet**
  - The ResNet (Residual Network) model is a powerful deep learning model known for its ability to train very deep neural networks effectively. In this project, ResNet is used to identify and classify food items from images.
  - **Training**: The model was trained on a comprehensive dataset of food images to accurately recognize various food items.
  - **Saved Model**: The trained ResNet model is saved in the files `food_saved_model.h5` and `foods_saved_model.h5`.

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. **Create a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required Python packages**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Flask backend**:
    ```bash
    python src/backend/app.py
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd src
    ```

2. **Install the Node.js packages**:
    ```bash
    npm install
    ```

3. **Start the React development server**:
    ```bash
    npm start
    ```

4. **Access the application**:
    Open your browser and go to `http://localhost:3000`.

## Usage

1. Upload an image of food through the web interface.
2. The backend (Flask) processes the image and uses the ResNet model to predict the food item.
3. The predicted name of the food is displayed on the frontend.

## Model Information

- **Model Used**: ResNet
- **Training**: The model was trained on a dataset of food images.
- **Saved Model**: The model is saved in `food_saved_model.h5` and `foods_saved_model.h5`.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
