import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ArticlePreview from '../components/ArticlePreview'
import arrow from '../img/arrow.svg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const headline = 'Le Ultime Notizie'.split("");

    return (
      <Layout>
        <main className="article-list">
            <div className="headline">
              <h1 alt="Le Ultime Notizie">
                {headline.map((letter, i) => {
                  return (
                    <span key={i} className="letter">{letter}</span>
                  )
                })}
              </h1>
            </div>
            {posts
              .map(({ node: post }) => (
                  <ArticlePreview key={post.id} post={post} />
              ))}
            <div className="article-loader">
                <button type="button">
                  <img src={arrow} alt="Arrow icon to load more articles"/>
                  <p className="anton">di più</p>
                </button>
            </div>
        </main>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featured_image {
              childImageSharp {
              	fluid(maxWidth: 640) {
              	  ...GatsbyImageSharpFluid
              	}
              }
            }
            featured_image_alt
          }
        }
      }
    }
}
`
