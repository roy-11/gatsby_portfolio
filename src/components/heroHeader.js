import React from "react";
import { StaticQuery, graphql } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <div className="primary-content-link">
          <a href="https://github.com/ryosuke-11?tab=repositories">GitHub Page</a>
        </div>
        {/* <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link> */}
      </div>
    )}
  />
);
