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
          { url: "%PUBLIC_URL%/Gallery/blackkeg.jpg" },
          { url: "./Gallery/bottlewine.jpg" },
          { url: "/Gallery/something.jpg" },
          { url: "/Gallery/3things.jpg" },
          { url: "/Gallery/beerkeg.jpg" },
          { url: "/Gallery/something.jpg" },

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
