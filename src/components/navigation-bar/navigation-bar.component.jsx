import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation-bar.styles.scss'

const NavigationBar = () => {
  return (
    <Fragment>
      <nav className='navigation'>

        <Link className='logo-container' to='/'>
          <div>Logo</div>
        </Link>

        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>

      </nav>
      <Outlet></Outlet>
    </Fragment>
  )
};

export default NavigationBar;