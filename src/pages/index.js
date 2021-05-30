import { Link } from 'react-router-dom';

import '../App.css';
import classes from './index.module.scss';

import Slider from '../components/UI/slider/slider';
import Button from '../components/UI/button/button';
import womens from '../assets/images/womens.jpeg';
import mens from '../assets/images/mens.jpeg';
import accessories from '../assets/images/accessories.jpeg';
import accessoriesMobile from '../assets/images/accessories-mobile.jpeg';
import productImage from '../assets/images/product-image.jpeg';
import insta1 from '../assets/images/social-1.jpg';
import insta2 from '../assets/images/social-2.jpg';
import insta3 from '../assets/images/social-3.jpg';
import insta4 from '../assets/images/social-4.jpg';
import insta5 from '../assets/images/social-5.jpg';
import email from '../assets/images/email-icon.svg';

import SlickSlider from 'react-slick';

const IndexPage = () => {
  //Settings for the New Arrivals slider
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
        breakpoint: 1024,
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
          <div className={classes.slideWrap}>
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
            <div className={classes.mobileContent}>
              <div className={classes.heading}>
                  <h1>Shop New Arrivals</h1>
              </div>
              <p className={classes.mobileDescription}>Our coolest new items are waiting for you!</p>
              <p style={{textAlign: "center"}}>
                <Button btnType="black">Shop Now</Button>
              </p>
            </div>
          </div>
          <div className={classes.slideWrap}>
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
            <div className={classes.mobileContent}>
              <div className={classes.heading}>
                  <h1>Our Fave Tees</h1>
              </div>
              <p className={classes.mobileDescription}>Shop all of our favorites</p>
              <p style={{textAlign: "center"}}>
                <Button btnType="black">Shop Now</Button>
              </p>
            </div>
          </div>
          <div className={classes.slideWrap}>
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
            <div className={classes.mobileContent}>
              <div className={classes.heading}>
                  <h1>Men's Tees</h1>
              </div>
              <p className={classes.mobileDescription}>Find the perferct shirt.</p>
              <p style={{textAlign: "center"}}>
                <Button btnType="black">Shop Now</Button>
              </p>
            </div>
          </div>
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
        <SlickSlider {...settings}>
          <div>
            <Link to="/"><img alt="product 1" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <Link to="/"><img alt="product 2" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <Link to="/"><img alt="product 3" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <Link to="/"><img alt="product 4" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <Link to="/"><img alt="product 5" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <Link to="/"><img alt="product 6" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <Link to="/"><img alt="product 7" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
            <p className={classes.productCat}>WOMEN'S T-SHIRT</p>
            <p className={classes.productPrice}>$19.99</p>
          </div>
          <div>
            <Link to="/"><img alt="product 8" src={productImage} /></Link>
            <p className={classes.productTitle}><Link to="/">Product Title</Link></p>
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
            <Link className={classes.instaPhoto} to="/"><img alt="insta post 1" src={insta1} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="insta post 2" src={insta2} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="insta post 3" src={insta3} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="insta post 4" src={insta4} /></Link>
            <Link className={classes.instaPhoto} to="/"><img alt="insta post 5" src={insta5} /></Link>
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