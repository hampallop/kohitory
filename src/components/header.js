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
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-bottom: 1.45rem;
`
const BrandingWrapper = styled.div`
  margin-left: -36px;
  display: flex;
  justify-content: center;
  width: 100%;
`

const GitHubLink = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "github-mark.png"}) {
        childImageSharp {
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

const Branding = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "kohitory-brand.png"}) {
        childImageSharp {
          fixed(width: 270) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <BrandingWrapper>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </Link>
    </BrandingWrapper>
  )
}

const Header = () => (
  <HeaderContainer>
    <GitHubLink />
    <Branding />
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
