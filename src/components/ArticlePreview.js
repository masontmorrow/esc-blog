import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ArticlePreview = ({post}) => {
    console.log(post);
    const featured_image = post.frontmatter.hasOwnProperty('featured_image');
    return (
        <div className="article-preview">
            <img 
                src={featured_image ? `${post.frontmatter.featured_image.publicURL}` : ""} 
                alt={featured_image ? `${post.frontmatter.featured_image_alt}` : ""}
            />
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