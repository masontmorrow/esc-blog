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
                <div>
                    <Link to={post.fields.slug}>
                        <h2>{frontmatter.title}</h2>
                    </Link>
                    <h6 className="anton">{frontmatter.date.includes('nvalid') ? "---" : frontmatter.date}</h6>
                    <p>
                        {post.excerpt}
                    </p>
                </div>
                <Link to={post.fields.slug}>
                    Leggi 
                    <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L18 18L1 35" stroke="black" stroke-width="2"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

// ArticlePreview.propTypes = {

// }

export default ArticlePreview;