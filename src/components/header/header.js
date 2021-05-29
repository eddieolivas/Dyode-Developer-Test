import { Link } from 'react-router-dom';
import Logo from '../header/logo/logo';
import Navigation from './navigation/navigation';
import NavToolbox from './navToolbox/navToolbox';
import classes from './header.module.scss';

import hamburger from '../../assets/images/hamburger-button.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.announcements}>
        <div className="container">
          Free Shipping on All Orders Over $75
        </div>
      </div>
      <div className={classes.mainHeader}>
        <div className={classes.container}>
          <Link class={classes.hamburger} to="/"><img alt="Mobile navigation button" src={hamburger} /></Link>
          <Logo />
          <Navigation />
          <NavToolbox />
        </div>
      </div>
    </header>
  );
}

export default Header;