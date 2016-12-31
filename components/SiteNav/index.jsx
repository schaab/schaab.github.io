import React from 'react';
import { Link } from 'react-router';
import './style.css';

const SiteNav = ({ location }) => (
  <nav className="blog-nav">
    <ul>
      <li>
        <Link
          to="/"
          className={location.pathname === '/' ? 'current' : null}
        >
                        Articles
                    </Link>
      </li>
      <li>
        <Link
          to="/about/"
          className={location.pathname === '/about/' ? 'current' : null}
        >
                        About me
          </Link>
      </li>
    </ul>
  </nav>
  );


SiteNav.propTypes = {
  location: React.PropTypes.object,
};

export default SiteNav;
