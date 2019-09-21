import {Link as GatsbyLink, graphql, useStaticQuery} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const GitHubLinkWrapper = styled.a`
  transition: opacity 0.3s ease;
  opacity: 0.2;
  &:hover {
    opacity: 0.8;
  }
`

const Link = styled(GatsbyLink)`
  color: #111;
  text-decoration: none;
`
const HeaderTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-left: -36px;
`
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.45rem;
`

const GitHubLink = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "github-mark.png"}) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <GitHubLinkWrapper
      href="https://github.com/hamcompe/kohitory"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img fixed={data.file.childImageSharp.fixed} />
    </GitHubLinkWrapper>
  )
}

const Header = ({siteTitle}) => (
  <HeaderContainer>
    <GitHubLink />
    <HeaderTitle>
      <Link to="/">{siteTitle}</Link>
    </HeaderTitle>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
