import React from "react";
// import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <article className="card ">
    <header>
      <div className="popupModal1">
        <input type="radio" name="modalPop" id="pop11" />
        <label htmlFor="pop11">
          {!!post.frontmatter.thumbnail && (
            <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
          )}
          <p className="card-title">{post.frontmatter.title}</p>
        </label>
        <input type="radio" name="modalPop" id="pop12" />
        <label htmlFor="pop12">CLOSE</label>
        <input type="radio" name="modalPop" id="pop13" />
        <label htmlFor="pop13">×</label>
        <div className="modalPopup2">
          <div className="modalPopup3">
            <h2 className="modalTitle">{post.frontmatter.title}</h2>
            <img
              className="modalImage"
              src={post.frontmatter.thumbnail}
              alt={post.frontmatter.title + "- Featured Shot"}
            />
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </header>
  </article>
);
export default PostLink;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`;
