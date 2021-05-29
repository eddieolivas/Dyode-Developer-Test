import React from 'react';

import { Link } from 'react-router-dom';
import classes from './navToolbox.module.scss';
import Search from '../../../assets/images/search.svg';
import Avatar from '../../../assets/images/avatar.svg';
import Cart from '../../../assets/images/shopping-cart.svg';
import SearchForm from './searchForm';

const NavToolbox = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  const clickSearch = () => setShowSearch(!showSearch);

  return (
    <div className={classes.navToolBox}>
      {showSearch ? <SearchForm /> : null}
      <ul>
        <li>
          <Link to="/" onClick={clickSearch}>
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