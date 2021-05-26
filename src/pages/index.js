// import { Link } from 'react-router-dom';
// import logo from '../logo.svg';
import '../App.css';
import classes from './index.module.scss';
import Slider from '../components/UI/slider/slider';
// import Slide from '../components/UI/slider/slide';
import Button from '../components/UI/button/button';
import womens from '../assets/images/womens.svg';
import mens from '../assets/images/mens.svg';
import accessories from '../assets/images/accessories.svg';
import productImage from '../assets/images/product-image.svg';
import insta1 from '../assets/images/social-1.svg';
import insta2 from '../assets/images/social-2.svg';
import insta3 from '../assets/images/social-3.svg';
import insta4 from '../assets/images/social-4.svg';
import insta5 from '../assets/images/social-5.svg';
import email from '../assets/images/email-icon.svg';

import SlickSlider from 'react-slick';

const IndexPage = () => {
  // const NextArrow = (props) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ background: "blue", zIndex: "1", right: "0"}}
  //     />
  //   );
  // };

  const settings = {
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 700,
    cssEase: 'linear',
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow className="nextArrow" style={{display: "block"}}/>
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
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <img alt="product 2" src={productImage} />
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <img alt="product 3" src={productImage} />
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <img alt="product 4" src={productImage} />
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <img alt="product 5" src={productImage} />
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <img alt="product 6" src={productImage} />
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <img alt="product 7" src={productImage} />
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <img alt="product 8" src={productImage} />
            <p className={classes.productTitle}>Product Title</p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
        </SlickSlider>
      </div>

      <div className={classes.favTees}>
        <div className={classes.container}>
          <div className={classes.favTeesContent}>
            <h2>Our Favorite Tees</h2>
            <p>Everyday tees you need.</p>
            <p style={{textAlign: "left"}}><Button btnType="green">Shop Now</Button></p>
          </div>
        </div>
      </div>

      <div className={classes.followUs}>
        <h2>Follow Us On Instagram</h2>
        <div className={classes.instaPhotos}>
          <img alt="insta post 1" className={classes.instaPhoto} src={insta1} />
          <img alt="insta post 2" className={classes.instaPhoto} src={insta2} />
          <img alt="insta post 3" className={classes.instaPhoto} src={insta3} />
          <img alt="insta post 4" className={classes.instaPhoto} src={insta4} />
          <img alt="insta post 5" className={classes.instaPhoto} src={insta5} />
        </div>
      </div>

      <div className={classes.signUp}>
        <h2 className={classes.signUpHeading}><img className={classes.emailIcon} alt="Email icon" src={email} />  Sign Up & Stay Connected</h2>
        <div className={classes.signUpCopy}>
        Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
        </div>
        <div className={classes.signUpForm}>
          <form>
            <input className={classes.input} type="text" placeholder="Enter Your Email Address"></input>
            <input className={classes.submit} type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;