import React from 'react';

import classes from '../../../pages/index.module.scss';
import Button from '../../UI/button/button';

const Slide = (props)=>{
  return(
    <div className={`${classes.slide1} ${classes.slide}`}>
      <div className={classes.sliderContent}>
        <div className={classes.heading}>
          <h1>{props.heading}</h1>
        </div>
        <div className={classes.content}>
        <p className={classes.description}>{props.description}</p>
        <p style={{textAlign: "left"}}>
          <Button btnType="black">Shop Now</Button>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;