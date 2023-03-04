import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation() {
  return (

    <header className={classes.header}>
      <div className={classes.logo}>MY LIBRARY</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All books</Link>
          </li>
          <li>
            <Link to='/new'>New books</Link>
          </li>
          <li>
            <Link to='/fav'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default MainNavigation;