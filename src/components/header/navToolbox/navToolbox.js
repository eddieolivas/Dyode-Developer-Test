import { Link } from 'react-router-dom';
import classes from './navToolbox.module.scss';
import Search from '../../../assets/images/search.svg';
import Avatar from '../../../assets/images/avatar.svg';
import Cart from '../../../assets/images/shopping-cart.svg';

const NavToolbox = () => {
  return (
    <div className={classes.navToolBox}>
      <ul>
        <li>
          <Link to="/">
            <img
              src={Search}
              alt="Search button"
            />
          </Link>
          </li>
        <li>
          <Link to="/">
            <img
              src={Avatar}
              alt="User button"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img
              src={Cart}
              alt="User button"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavToolbox;