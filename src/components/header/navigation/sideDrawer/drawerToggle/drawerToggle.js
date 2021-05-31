import React from 'react';

import classes from './drawerToggle.module.scss';
import hamburger from '../../../../../assets/images/hamburger-button.webp';

const drawerToggle = (props) => (
  <div className={classes.drawerToggle} onClick={props.clicked}><img width="28px" alt="Mobile navigation button" src={hamburger} /></div>
);

export default drawerToggle;