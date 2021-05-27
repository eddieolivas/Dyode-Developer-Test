import classes from './footer.module.scss';
import fb from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.customerService}>
          <h4 className={classes.footerHeading}>Customer Service</h4>
          <ul>
            <li>Accessibility</li>
            <li>Contact Us</li>
            <li>Return Policy</li>
            <li>FAQ</li>
            <li>Gift Certificates</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className={classes.company}>
          <h4 className={classes.footerHeading}>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div className={classes.followUs}>
          <h4 className={classes.footerHeading}>Follow Us</h4>
          <img alt="Facebook logo" className={classes.social} src={fb} />
          <img alt="Instagram logo" className={classes.social} src={instagram}/>
          <img alt="Twitter logo" className={classes.social} src={twitter} />
        </div>
      </div>
    </div>
  );
}

export default Footer;