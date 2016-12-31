import React from 'react';
import { Link } from 'react-router';
import { config } from 'config';
import SiteNav from '../SiteNav';
import SiteLinks from '../SiteLinks';
import './style.css';

const SiteSidebar = (props) => {
  const { location } = props;
  const isHome = location.pathname === '/';

  const header = (
    <header>
      <Link style={{ textDecoration: 'none', borderBottom: 'none', outline: 'none' }} to={'/'}>
        <img
          src="https://gravatar.com/avatar/b8582acbe661e121902f8c67ae54e59ds?s=150"
          alt="Profile Pic"
          width="75"
          height="75"
        />
      </Link>
      { isHome ? (
        <h1>
          <Link
            style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }}
            to={'/'}
          >
            { config.siteAuthor }
          </Link>
        </h1>
            ) :
            (<h2>
              <Link
                style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }}
                to={'/'}
              >
                { config.siteAuthor }
              </Link>
            </h2>)
        }
      <p>
        { config.siteDescr }
      </p>
    </header>
        );

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="blog-details">
          <header>
            { header }
          </header>
        </div>
        <div className="blog-options">
          <SiteNav {...props} />
          <footer>
            <SiteLinks {...props} />
            <p className="copyright">
                      &copy; All rights reserved.
                    </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

SiteSidebar.propTypes = {
  location: React.PropTypes.object,
};

export default SiteSidebar;
