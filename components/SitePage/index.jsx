import React from 'react';
import { config } from 'config';
import SiteSidebar from '../SiteSidebar';
import './style.css';

const SitePage = (props) => {
  const { route } = props;
  const post = route.page.data;

  return (
    <div>
      <SiteSidebar {...props} />
      <div className="content">
        <div className="main">
          <div className="main-inner">
            <div className="blog-page">
              <div className="text">
                <h1>{ post.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SitePage.propTypes = {
  route: React.PropTypes.shape({
    page: React.PropTypes.shape({
      pages: React.PropTypes.arraye,
    }),
  }).isRequired,
};

export default SitePage;
