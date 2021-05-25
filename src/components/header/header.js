import Logo from '../header/logo/logo';
import Navigation from './navigation/navigation';
import NavToolbox from './navToolbox/navToolbox';
import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes.announcements} container`}>
        Free Shipping on All Orders Over $75
      </div>
      <div className={classes.mainHeader}>
        <div className={classes.container}>
          <Logo />
          <Navigation />
          <NavToolbox />
        </div>
      </div>
    </header>
  );
}

export default Header;