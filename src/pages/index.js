import { Link } from 'react-router-dom';

import '../App.css';
import classes from './index.module.scss';

import Slider from '../components/UI/slider/slider';
import HeroSlide from '../components/UI/slider/heroSlide';
import ProductSlide from '../components/UI/slider/productSlide';
import Button from '../components/UI/button/button';
import womens from '../assets/images/womens.webp';
import mens from '../assets/images/mens.webp';
import accessories from '../assets/images/accessories.webp';
import accessoriesMobile from '../assets/images/accessories-mobile.webp';
import productImage from '../assets/images/product-image.webp';
import insta1 from '../assets/images/social-1.webp';
import insta2 from '../assets/images/social-2.webp';
import insta3 from '../assets/images/social-3.webp';
import insta4 from '../assets/images/social-4.webp';
import insta5 from '../assets/images/social-5.webp';
import email from '../assets/images/email-icon.webp';

import ProductSlider from 'react-slick';

const IndexPage = () => {
  //Settings for the New Arrivals product slider
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
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      }
    ]
  }

  return (
    <div className="App">
      <div className={classes.hero}>
        <Slider>
          <HeroSlide 
            slideClass={classes.slide1}
            heading="Shop New Arrivals"
            description="Our coolest new items are waiting for you!" 
          />
          <HeroSlide 
            slideClass={classes.slide2}
            heading="Our Fave Tees"
            description="Shop all of our favorites." 
          />
          <HeroSlide 
            slideClass={classes.slide3}
            heading="Men's Tees"
            description="Find the perfect shirt." 
          />
        </Slider>
      </div>

      <div className={classes.categories}>
        <div className={classes.categoryCard}>
          <Link to="/"><img alt="womens" src={womens} /></Link>
          <div className={classes.categoryTitle}>
          <Link to="/">Women's</Link>
          </div>
        </div>
        <div className={classes.categoryCard}>
          <Link to="/"><img alt="mens" src={mens} /></Link>
          <div className={classes.categoryTitle}>
          <Link to="/">Men's</Link>
          </div>
        </div>
        <div className={classes.categoryCard}>
          <Link className={classes.accessoriesDesktop} to="/"><img alt="accessories" src={accessories} /></Link>
          <Link className={classes.accessoriesMobile} to="/"><img alt="accessories" src={accessoriesMobile} /></Link>
          <div className={classes.categoryTitle}>
          <Link to="/">Accessories</Link>
          </div>
        </div>
      </div>

      <div className={classes.newArrivals}>
        <h2>New Arrivals</h2>
        <ProductSlider {...settings}>
            {/* Display the product slide 5 times. */}
            {[
              ...Array(5),
            ].map((value, index) => {
              return (
                <ProductSlide
                  key={index}
                  image={productImage}
                  title="Product Title"
                  category="WOMEN'S T-SHIRT"
                  price="$19.99"
                />
              );
            })}
        </ProductSlider>
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

      <div className={classes.favTeesMobile}>
        <div className={classes.favTeesContent}>
          <h2>Our Favorite Tees</h2>
          <p>Everyday tees you need.</p>
          <p style={{textAlign: "center"}}><Button btnType="black">Shop Now</Button></p>
        </div>
      </div>

      <div className={classes.followUs}>
        <div className={classes.container}>
          <h2>Follow Us On Instagram</h2>
          <div className={classes.instaPhotos}>
            <Link className={classes.instaPhoto} to="/"><img alt="Instagram post 1" src={insta1} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="Instagram post 2" src={insta2} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="Instagram post 3" src={insta3} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="Instagram post 4" src={insta4} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="Instagram post 5" src={insta5} /></Link>
          </div>
        </div>
      </div>

      <div className={classes.signUp}>
        <div className={classes.container}>
          <h2 className={classes.signUpHeading}><img className={classes.emailIcon} alt="Email icon" src={email} />  Sign Up & Stay Connected</h2>
          <div className={classes.sideBySide}>
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
      </div>
    </div>
  );
}

export default IndexPage;
