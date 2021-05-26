import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import classes from './index.module.scss';
import Slider from '../components/UI/slider/slider';
import Slide from '../components/UI/slider/slide';
import Button from '../components/UI/button/button';
import womens from '../assets/images/womens.svg';
import mens from '../assets/images/mens.svg';
import accessories from '../assets/images/accessories.svg';
import productImage from '../assets/images/product-image.svg';

import SlickSlider from 'react-slick';

const IndexPage = () => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ background: "blue", zIndex: "1", right: "0"}}
      />
    );
  };

  const settings = {
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 700,
    cssEase: 'linear',
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow className="nextArrow" style={{display: "block"}}/>
  }

  return (
    <div className="App">
      <div className={classes.hero}>
        <Slider>
          <div className={`${classes.slide1} ${classes.slide}`}>
            <div className={classes.sliderContent}>
              <div className={classes.heading}>
                <h1>Shop New Arrivals</h1>
              </div>
              <div className={classes.content}>
              <p className={classes.description}>Our coolest new items are waiting for you!</p>
              <p style={{textAlign: "left"}}>
                <Button btnType="black">Shop Now</Button>
              </p>
              </div>
            </div>
          </div>
          <div className={`${classes.slide2} ${classes.slide}`}>
            <div className={classes.sliderContent}>
              <div className={classes.heading}>
                <h1>Our Fave Tees</h1>
              </div>
              <div className={classes.content}>
                <p className={classes.description}>Shop all of our favorites.</p>
                <p style={{textAlign: "left"}}>
                  <Button btnType="black">Shop Now</Button>
                </p>
              </div>
            </div>
          </div>
          <div className={`${classes.slide3} ${classes.slide}`}>
            <div className={classes.sliderContent}>
              <div className={classes.heading}>
                <h1>Men's Tees</h1>
              </div>
              <div className={classes.content}>
                <p className={classes.description}>Find the perferct shirt.</p>
                <p style={{textAlign: "left"}}>
                  <Button btnType="black">Shop Now</Button>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className={classes.categories}>
        <div className={classes.categoryCard}>
          <img alt="womens" src={womens} />
          <div className={classes.categoryTitle}>
            Women's
          </div>
        </div>
        <div className={classes.categoryCard}>
          <img alt="mens" src={mens} />
          <div className={classes.categoryTitle}>
            Women's
          </div>
        </div>
        <div className={classes.categoryCard}>
          <img alt="accessories" src={accessories} />
          <div className={classes.categoryTitle}>
            Accessories
          </div>
        </div>
      </div>

      <div className={classes.newArrivals}>
        <h2>New Arrivals</h2>
        <SlickSlider {...settings}>
          <div>
            <img alt="product 1" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
          <div>
            <img alt="product 2" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
          <div>
            <img alt="product 3" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
          <div>
            <img alt="product 4" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
          <div>
            <img alt="product 5" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
          <div>
            <img alt="product 6" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
          <div>
            <img alt="product 7" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
          <div>
            <img alt="product 8" src={productImage} />
            <span>Product Title</span>
            <span>WOMEN'S T-SHIRT</span>
            <span>$19.99</span>
          </div>
        </SlickSlider>
      </div>

      <div className={classes.favTees}>
        <h2>Our Favorite Tees</h2>
        <Button btnType="green">Shop Now</Button>
      </div>
    </div>
  );
}

export default IndexPage;