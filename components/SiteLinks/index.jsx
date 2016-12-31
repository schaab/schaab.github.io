import React from 'react';
import { config } from 'config';
import './style.css';
import '../../static/fonts/fontawesome/style.css';

const SiteLinks = () => (
  <div className="blog-social">
    <ul>
      <li>
        <a href={config.siteTwitterUrl}><i className="fa fa-twitter" /></a>
      </li>
      <li>
        <a href={config.siteGithubUrl}><i className="fa fa-github-alt" /></a>
      </li>
      <li>
        <a href={`mailto:${config.siteEmailUrl}`}><i className="fa fa-envelope-o" /></a>
      </li>
    </ul>
  </div>
);

export default SiteLinks;
