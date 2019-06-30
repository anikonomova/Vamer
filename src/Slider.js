import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './App.css';
import PropTypes from 'prop-types';

class Slider extends React.Component {
  constructor() {
        super();
        this.state = {
            useGPURender: true,
            showNavs: true,
            showBullets: true,
            navStyle: 1,
            slideDuration: 0.5,
            slideIndexText: "",
        };
    }

    componentDidMount() {
        console.log("[App componentDidMount]");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App componentDidUpdate]");
    }


    render() {
      const images = [
          { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Area_code_FL.svg/400px-Area_code_FL.svg.png" },
          { url: 'Images/blackkeg.jpg' },
          { url: "Images/blackkeg.jpg" },
          { url: "Images/blackkeg.jpg" },
          { url: "Images/blackkeg.jpg" },
      ];
      const toggleOptions = ["useGPURender", "showNavs", "showBullets"];

        return (
            <div>
                <SimpleImageSlider
                width={400}
                height={386}
                images={images}
                style={{ margin: "0 auto", marginTop: "50px" }}
                        images={images}
                    showBullets={this.state.showBullets}
                    showNavs={this.state.showNavs}
                    useGPURender={this.state.useGPURender}
                    navStyle={this.state.navStyle}
                    slideDuration={this.state.slideDuration}
                    onClickNav={this.onClickNav}
                    onClickBullets={this.onClickBullets}
                    onStartSlide={this.onStartSlide}
                    onCompleteSlide={this.onCompleteSlide}
                />
            </div>
        );
    }
}

export default Slider;
