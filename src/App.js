import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import './App.css';
import koreanFood1 from './k1.jpg';
import koreanFood2 from './k2.jpg';
import koreanFood3 from './k3.jpg';
import koreanFood4 from './k4.jpg';
import koreanFood5 from './k5.jpg';
import koreanFood6 from './k6.jpg';
import koreanFood7 from './k7.jpg';
import koreanFood8 from './k8.jpg';
import koreanFood9 from './k9.jpg';
import koreanFood10 from './k10.jpg';
import koreanFood11 from './k11.jpg';
import koreanFood12 from './k12.jpg';
import KoreanFooda from './images/g1.jpg';
import KoreanFooda1 from './images/g2.jpg';
import KoreanFooda2 from './images/g3.jpg';
import KoreanFooda3 from './images/g4.jpg';
import KoreanFooda4 from './images/g5.jpg';
import KoreanFooda5 from './images/g6.jpg';
import KoreanFooda6 from './images/ka.jpg';
import KoreanFooda7 from './images/kal1.jpg';
import KoreanFooda8 from './images/kal2.jpg';
import KoreanFooda9 from './images/kal3.jpg';
import KoreanFooda0 from './images/kal4.jpg';
import KoreanFooda11 from './images/kal5.jpg';
import KoreanFooda12 from './images/kal6.jpg';
import KoreanFooda13 from './images/kb.jpg';
import KoreanFooda14 from './images/kc.jpg';
import KoreanFooda15 from './images/kd.jpg';
import KoreanFooda16 from './images/ke.jpg';
import KoreanFooda17 from './images/kf.jpg';
import KoreanFooda18 from './images/kg.jpg';
import KoreanFooda19 from './images/kim1.jpg';
import KoreanFoodb0 from './images/kim2.jpg';
import KoreanFoodb1 from './images/kim3.jpg';
import KoreanFoodb2 from './images/kim4.jpg';
import KoreanFoodb3 from './images/kim5.jpg';
import KoreanFoodb4 from './images/man1.jpg';
import KoreanFoodb5 from './images/man2.jpg';
import KoreanFoodb6 from './images/man3.jpg';

const App = () => {
  const [image, setImage] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));
    predictFood(file);
  };

  const predictFood = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError(null);
    setFoodName('');

    axios.post('http://127.0.0.1:5000/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response.data);
        setFoodName(response.data.foodName);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        setError('Error uploading image');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleImageClick = (src) => {
    fetch(src)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], 'food.jpg', { type: blob.type });
        setImage(URL.createObjectURL(file));
        predictFood(file);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="navbar">
            <li><a href="#about">About</a></li>
            <li><a href="#food-detection">Food Detection</a></li>
            <li><a href="#common-foods">Common Foods</a></li>
            <li><a href="#korean-foods">Korean Foods</a></li>
          </ul>
        </nav>
        <h1>Food Recognition</h1>
      </header>
      <main>
        <section id="food-detection">
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag & drop an image, or click to select one</p>
              </div>
            )}
          </Dropzone>
          {image && <img src={image} alt="Uploaded food" className="uploaded-image" />}
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {foodName && <h2>Recognized Food: {foodName}</h2>}
        </section>
        <section id="common-foods">
          {/* Add common foods content here */}
        </section>
        <section id="korean-foods">
          <h2>Korean Foods</h2>
          <div className="food-gallery">
            <img src={koreanFood1} alt="Korean Food 1" className="food-image" onClick={() => handleImageClick(koreanFood1)} />
            <img src={koreanFood2} alt="Korean Food 2" className="food-image" onClick={() => handleImageClick(koreanFood2)} />
            <img src={koreanFood3} alt="Korean Food 3" className="food-image" onClick={() => handleImageClick(koreanFood3)} />
            <img src={koreanFood4} alt="Korean Food 4" className="food-image" onClick={() => handleImageClick(koreanFood4)} />
            <img src={koreanFood5} alt="Korean Food 5" className="food-image" onClick={() => handleImageClick(koreanFood5)} />
            <img src={koreanFood6} alt="Korean Food 6" className="food-image" onClick={() => handleImageClick(koreanFood6)} />
            <img src={koreanFood7} alt="Korean Food 7" className="food-image" onClick={() => handleImageClick(koreanFood7)} />
            <img src={koreanFood8} alt="Korean Food 8" className="food-image" onClick={() => handleImageClick(koreanFood8)} />
            <img src={koreanFood9} alt="Korean Food 9" className="food-image" onClick={() => handleImageClick(koreanFood9)} />
            <img src={koreanFood10} alt="Korean Food 10" className="food-image" onClick={() => handleImageClick(koreanFood10)} />
            <img src={koreanFood11} alt="Korean Food 11" className="food-image" onClick={() => handleImageClick(koreanFood11)} />
            <img src={koreanFood12} alt="Korean Food 12" className="food-image" onClick={() => handleImageClick(koreanFood12)} />
            <img src={KoreanFooda} alt="Korean Food 13" className="food-image" onClick={() => handleImageClick(KoreanFooda)} />
            <img src={KoreanFooda1} alt="Korean Food 14" className="food-image" onClick={() => handleImageClick(KoreanFooda1)} />
            <img src={KoreanFooda2} alt="Korean Food 15" className="food-image" onClick={() => handleImageClick(KoreanFooda2)} />
            <img src={KoreanFooda3} alt="Korean Food 16" className="food-image" onClick={() => handleImageClick(KoreanFooda3)} />
            <img src={KoreanFooda4} alt="Korean Food 17" className="food-image" onClick={() => handleImageClick(KoreanFooda4)} />
            <img src={KoreanFooda5} alt="Korean Food 18" className="food-image" onClick={() => handleImageClick(KoreanFooda5)} />
            <img src={KoreanFooda6} alt="Korean Food 19" className="food-image" onClick={() => handleImageClick(KoreanFooda6)} />
            <img src={KoreanFooda7} alt="Korean Food 20" className="food-image" onClick={() => handleImageClick(KoreanFooda7)} />
            <img src={KoreanFooda8} alt="Korean Food 21" className="food-image" onClick={() => handleImageClick(KoreanFooda8)} />
            <img src={KoreanFooda9} alt="Korean Food 22" className="food-image" onClick={() => handleImageClick(KoreanFooda9)} />
            <img src={KoreanFooda0} alt="Korean Food 23" className="food-image" onClick={() => handleImageClick(KoreanFooda0)} />
            <img src={KoreanFooda11} alt="Korean Food 24" className="food-image" onClick={() => handleImageClick(KoreanFooda11)} />
            <img src={KoreanFooda12} alt="Korean Food 25" className="food-image" onClick={() => handleImageClick(KoreanFooda12)} />
            <img src={KoreanFooda13} alt="Korean Food 26" className="food-image" onClick={() => handleImageClick(KoreanFooda13)} />
            <img src={KoreanFooda14} alt="Korean Food 27" className="food-image" onClick={() => handleImageClick(KoreanFooda14)} />
            <img src={KoreanFooda15} alt="Korean Food 28" className="food-image" onClick={() => handleImageClick(KoreanFooda15)} />
            <img src={KoreanFooda16} alt="Korean Food 29" className="food-image" onClick={() => handleImageClick(KoreanFooda16)} />
            <img src={KoreanFooda17} alt="Korean Food 30" className="food-image" onClick={() => handleImageClick(KoreanFooda17)} />
            <img src={KoreanFooda18} alt="Korean Food 31" className="food-image" onClick={() => handleImageClick(KoreanFooda18)} />
            <img src={KoreanFooda19} alt="Korean Food 32" className="food-image" onClick={() => handleImageClick(KoreanFooda19)} />
            <img src={KoreanFoodb0} alt="Korean Food 33" className="food-image" onClick={() => handleImageClick(KoreanFoodb0)} />
            <img src={KoreanFoodb1} alt="Korean Food 34" className="food-image" onClick={() => handleImageClick(KoreanFoodb1)} />
            <img src={KoreanFoodb2} alt="Korean Food 35" className="food-image" onClick={() => handleImageClick(KoreanFoodb2)} />
            <img src={KoreanFoodb3} alt="Korean Food 36" className="food-image" onClick={() => handleImageClick(KoreanFoodb3)} />
            <img src={KoreanFoodb4} alt="Korean Food 37" className="food-image" onClick={() => handleImageClick(KoreanFoodb4)} />
            <img src={KoreanFoodb5} alt="Korean Food 38" className="food-image" onClick={() => handleImageClick(KoreanFoodb5)} />
            <img src={KoreanFoodb6} alt="Korean Food 39" className="food-image" onClick={() => handleImageClick(KoreanFoodb6)} />
          </div>
        </section>
        <section id="about">
          <h2>About</h2>
          {/* Add about content here */}
        </section>
      </main>
    </div>
  );
};

export default App;
