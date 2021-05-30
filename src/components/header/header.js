import React from 'react';
import Logo from '../header/logo/logo';
import Navigation from './navigation/navigation';
import NavToolbox from './navToolbox/navToolbox';
import DrawerToggle from '../header/navigation/sideDrawer/drawerToggle/drawerToggle';
import classes from './header.module.scss';

const header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.announcements}>
        <div className="container">
          Free Shipping on All Orders Over $75
        </div>
      </div>
      <div className={classes.mainHeader}>
        <div className={classes.container}>
          <DrawerToggle clicked={props.drawerToggleClicked} /> 
          <Logo />
          <Navigation />
          <NavToolbox />
        </div>
      </div>
    </header>
  );
}

export default header;