import classes from './navigation.module.scss';
import { Link } from 'react-router-dom';

import insta1 from '../../../assets/images/social-1.webp';

const Navigation = () => {
  return (
    <nav className={classes.mainNav}>
      <ul>
        <li>
          <Link to="/">Men's</Link>
          <div className={classes.subMenu}>
            <div className={classes.subLeft}>
              <div className={classes.subLeftL}>
                <img alt="insta post 1" src={insta1} />
              </div>
              <div className={classes.subLeftR}>
                <ul>
                  <li><Link to="/">Shop All</Link></li>
                  <li><Link to="/">New Arrivals</Link></li>
                  <li><Link to="/">Favorites</Link></li>
                  <li><Link to="/">Sale</Link></li>
                </ul>
              </div>
            </div>
            <div className={classes.subRight}>
              <div className={classes.subRightL}>
                <ul className={classes.subRightMenuLeft}>
                  <li><div className={classes.subMenuHeading}>Tops</div></li>
                  <li><Link to="/">T-Shirts</Link></li>
                  <li><Link to="/">Short Sleeve</Link></li>
                  <li><Link to="/">Long Sleeve</Link></li>
                </ul>
              </div>
              <div className={classes.subRightR}>
                <ul className={classes.subRightMenuRight}>
                  <li><div className={classes.subMenuHeading}>Bottoms</div></li>
                  <li><Link to="/">Short</Link></li>
                  <li><Link to="/">Pants</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><Link to="/">Women's</Link></li>
        <li><Link to="/">Accessories</Link></li>
        <li><Link to="/">Sale!</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;