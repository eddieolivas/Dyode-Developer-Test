import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import classes from './index.module.scss';
import Slider from '../components/UI/slider/slider';

const IndexPage = () => {
  console.log(classes);
  return (
    <div className="App">
      <div className={classes.hero}>
        <Slider className="mt-5">
          <div className={`${classes.slide1} ${classes.slide}`}>
            <div className="title">
              <h1>Shop New Arrivals</h1>
            </div>
            <div className="content">
            <p>Our coolest new items are waiting for you!</p>
            <p className="mt-2">
              <Link to="/">Shop Now</Link>
            </p>
            </div>
          </div>
          <div className={`${classes.slide2} ${classes.slide}`}>
            <div className="title">
              <h1>Our Fave Tees</h1>
            </div>
            <div className="content">
              <p>Shop all of our favorites.</p>
              <p className="mt-2">
                <Link to="/">Shop Now</Link>
              </p>
            </div>
          </div>
          <div className={`${classes.slide3} ${classes.slide}`}>
            <div className="title">
              <h1>Men's Tees</h1>
            </div>
            <div className="content">
              <p>Find the perferct shirt.</p>
              <p className="mt-2">
                <Link to="/">Shop Now</Link>
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default IndexPage;