import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { config } from 'config';
import ReadNext from '../ReadNext';
import './style.css';
import '../../static/css/highlight.css';

const SitePost = (props) => {
  const { route } = props;
  const post = route.page.data;
  const home = (
    <div>
      <Link className="gohome" to={'/'}> All Articles</Link>
    </div>
    );

  return (
    <div>
      { home }
      <div className="blog-single">
        <div className="text">
          <h1>{ post.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className="date-published">
            <em>Published { moment(post.date).format('D MMM YYYY') }</em>
          </div>
        </div>
        <div className="footer">
          <ReadNext post={post} {...props} />
          <hr />
          <p>
            { config.siteDescr }
            <a href={config.siteTwitterUrl}>
              <br /> <strong>{ config.siteAuthor }</strong> on Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

SitePost.propTypes = {
  route: React.PropTypes.shape({
    page: React.PropTypes.shape({
      pages: React.PropTypes.arraye,
    }),
  }).isRequired,
};

export default SitePost;
