import { Link } from 'react-router-dom';
import Collapse from 'rc-collapse';

import BackDrop from '../../../UI/backDrop/backDrop';
import classes from './sideDrawer.module.scss';

import sideDrawerX from '../../../../assets/images/sidedrawer-x.webp';
import insta1 from '../../../../assets/images/social-1.webp';


import './accordion.scss';

require('rc-collapse/assets/index.css');


const Panel = Collapse.Panel;

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
        <div className={classes.sideDrawerWrap}>
          <div className={classes.sideDrawerTop}>
            <img alt="Close button" src={sideDrawerX} width="28px" height="28px" onClick={props.closed} />
          </div>
          <div className={classes.sideDrawerNav}>
            <Collapse 
              accordion={false}
              showArrow={false}
              defaultActiveKey={["panel1", "panel2"]}>
              <Panel 
                header="Tops"
                key="panel1">
                <ul className={classes.subRightMenuLeft}>
                  <li><Link to="/">T-Shirts</Link></li>
                  <li><Link to="/">Short Sleeve</Link></li>
                  <li><Link to="/">Long Sleeve</Link></li>
                </ul>
              </Panel>
              <Panel 
                header="Bottoms"
                key="panel2">
                <ul className={classes.subRightMenuRight}>
                  <li><Link to="/">Short</Link></li>
                  <li><Link to="/">Pants</Link></li>
                </ul>
              </Panel>
            </Collapse>
          </div>
          <div className={classes.sideDrawerFeature}>
            <div className={classes.oneSide}>
              <img alt="insta post 1" src={insta1} />
            </div>
            <div className={classes.oneSide}>
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
    </div>
  );
};

export default sideDrawer;