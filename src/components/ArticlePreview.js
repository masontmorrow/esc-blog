import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ArticlePreview = ({ post }) => {
    const { frontmatter } = post;
    const featured_image = frontmatter.featured_image !== null;
    console.log(frontmatter);
    console.log(featured_image);
    return (
        <div className="article-preview">
            {featured_image ? (
                <Img 
                    className="article-preview-img"
                    fluid={frontmatter.featured_image.childImageSharp.fluid} 
                    alt={frontmatter.featured_image_alt}
                />
            ) : (
                <div className="article-preview-text"></div>
            )}
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