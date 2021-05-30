import React from 'react';

import classes from './drawerToggle.module.scss';
import hamburger from '../../../../../assets/images/hamburger-button.svg';

const drawerToggle = (props) => (
  <div className={classes.drawerToggle} onClick={props.clicked}><img alt="Mobile navigation button" src={hamburger} /></div>
);

export default drawerToggle;