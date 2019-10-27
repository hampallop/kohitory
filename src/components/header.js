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

const GitHubLink = ({imgFixedSrc}) => (
  <GitHubLinkWrapper
    href="https://github.com/hamcompe/kohitory"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Img fixed={imgFixedSrc} style={{display: 'block'}} />
  </GitHubLinkWrapper>
)

const Branding = ({imgFixedSrc}) => (
  <BrandingWrapper>
    <Link to="/">
      <Img fixed={imgFixedSrc} style={{display: 'block'}} />
    </Link>
  </BrandingWrapper>
)

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      githubMark: file(relativePath: {eq: "github-mark.png"}) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      brand: file(relativePath: {eq: "kohitory-brand.png"}) {
        childImageSharp {
          fixed(width: 270) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <HeaderContainer>
      <GitHubLink imgFixedSrc={data.githubMark.childImageSharp.fixed} />
      <Branding imgFixedSrc={data.brand.childImageSharp.fixed} />
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
