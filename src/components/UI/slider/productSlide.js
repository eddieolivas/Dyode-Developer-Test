import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../../../pages/index.module.scss';

const HeroSlide = (props)=>{
  return(
    <div>
      <Link to="/"><img alt="product 1" src={props.image} /></Link>
      <p className={classes.productTitle}><Link to="/">{props.title}</Link></p>
      <p className={classes.productCat}>{props.category}</p>
      <p className={classes.productPrice}>{props.price}</p>
    </div>
  );
}

export default HeroSlide;