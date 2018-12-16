import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import arrow from '../img/arrow.svg'

const ArticlePreview = ({ post }) => {
    const { frontmatter } = post;
    const featured_image = frontmatter.featured_image !== null;
    return (
        <article className="article-preview">
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
                    <img src={arrow} alt="Arrow icon"/>
                </Link>
            </div>
        </article>
    )
}

// ArticlePreview.propTypes = {

// }

export default ArticlePreview;