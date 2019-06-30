import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './App.css';

class Slider extends React.Component {
    render() {
      const images = [
          { url: "./Images/blackkeg.jpg" },
          { url: "./Images/blackkeg.jpg"},
          { url: './Images/blackkeg.jpg' },
          { url: "./Images/blackkeg.jpg" },
          { url: "./Images/blackkeg.jpg" },
          { url: "./Images/blackkeg.jpg" },
      ];

        return (
            <div>
                <SimpleImageSlider
                width={400}
                height={386}
                images={images}
                />
            </div>
        );
    }
}

export default Slider;
