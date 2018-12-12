import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';

const ArticlePreview = ({post}) => {
    console.log(post);
    return (
        <div className="article-preview">
            <div><img src="" alt=""/></div>
          <p>
               <Link className="" to={post.fields.slug}>
               {post.frontmatter.title}
              </Link>
               <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
          </p>
          <p>
               {post.excerpt}
          </p>
           <Link className="" to={post.fields.slug}>
            Keep Reading →
          </Link>
        </div>
    )
}

// ArticlePreview.propTypes = {

// }

export default ArticlePreview;