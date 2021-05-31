import { Link } from 'react-router-dom';

import BackDrop from '../../../UI/backDrop/backDrop';
import classes from './sideDrawer.module.scss';

import sideDrawerX from '../../../../assets/images/sidedrawer-x.jpeg';
import insta1 from '../../../../assets/images/social-1.jpg';

const sideDrawer = (props) => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }

  return (
    <div>
      <BackDrop 
        show={props.open}
        clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.sideDrawerTop}>
          <img alt="Close button" src={sideDrawerX} width="28px" height="28px" onClick={props.closed} />
        </div>
        <div className={classes.sideDrawerNav}>
          <ul className={classes.subRightMenuLeft}>
            <li><div className={classes.subMenuHeading}>Tops</div></li>
            <li><Link to="/">T-Shirts</Link></li>
            <li><Link to="/">Short Sleeve</Link></li>
            <li><Link to="/">Long Sleeve</Link></li>
          </ul>

          <ul className={classes.subRightMenuRight}>
                <li><div className={classes.subMenuHeading}>Bottoms</div></li>
                <li><Link to="/">Short</Link></li>
                <li><Link to="/">Pants</Link></li>
              </ul>
        </div>
        <div className={classes.sideDrawerFeature}>
          <div className={classes.subLeftL}>
            <img alt="insta post 1" src={insta1} />
          </div>
          <div className={classes.subLeftR}>
            <ul>
              <li><Link to="/">Shop All</Link></li>
              <li><Link to="/">New Arrivals</Link></li>
              <li><Link to="/">Favorites</Link></li>
              <li><Link to="/">Sale</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideDrawer;