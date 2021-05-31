import React from 'react';

import classes from '../../../pages/index.module.scss';
import Button from '../button/button';

const HeroSlide = (props)=>{
  return(
    <div className={classes.slideWrap}>
      <div className={`${props.slideClass} ${classes.slide}`}>
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
      <div className={classes.mobileContent}>
        <div className={classes.heading}>
            <h1>{props.heading}</h1>
        </div>
        <p className={classes.mobileDescription}>{props.description}</p>
        <p style={{textAlign: "center"}}>
          <Button btnType="black">Shop Now</Button>
        </p>
      </div>
    </div>
  );
}

export default HeroSlide;
