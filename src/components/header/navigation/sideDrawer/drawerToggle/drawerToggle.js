import React from 'react';
import { Link } from 'react-router-dom';

import classes from './drawerToggle.module.scss';
import hamburger from '../../../../../assets/images/hamburger-button.svg';

const drawerToggle = (props) => (
  <Link className={classes.drawerToggle} onClick={props.clicked}><img alt="Mobile navigation button" src={hamburger} /></Link>
);

export default drawerToggle;