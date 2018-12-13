import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ArticlePreview = ({ post }) => {
    const { frontmatter } = post;
    const featured_image = frontmatter.hasOwnProperty('featured_image');
    return (
        <div className="article-preview">
            {/* <img 
                src={featured_image ? `${post.frontmatter.featured_image.publicURL}` : ""} 
                alt={featured_image ? `${post.frontmatter.featured_image_alt}` : ""}
            /> */}
            <Img 
                className="article-preview-img"
                fluid={featured_image ? frontmatter.featured_image.childImageSharp.fluid : ""} 
                alt={featured_image ? frontmatter.featured_image_alt : ""}
            />
            <div className="article-preview-text">
                <h1>{frontmatter.title}</h1>
                <h6 className="anton">{frontmatter.date}</h6>
                <p>
                    {post.excerpt}
                </p>
                <Link to={post.fields.slug}>
                    Keep Reading →
                </Link>
            </div>
        </div>
    )
}

// ArticlePreview.propTypes = {

// }

export default ArticlePreview;