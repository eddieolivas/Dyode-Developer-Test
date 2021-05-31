import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../../assets/images/logo.webp';
import classes from './logo.module.scss';

const logo = (props) => (
  <div className={classes.logo}>
    <Link to="/"><img src={logoImage} alt="Shop logo" /></Link>
  </div>
);

export default logo;