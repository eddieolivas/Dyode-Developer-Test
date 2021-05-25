import classes from './navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={classes.mainNav}>
      <ul>
        <li><Link to="/">Men's</Link></li>
        <li><Link to="/">Women's</Link></li>
        <li><Link to="/">Accessories</Link></li>
        <li><Link to="/">Sale!</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;