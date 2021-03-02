import React from "react"
import { graphql } from "gatsby"

const NotFoundPage = () => {
  

  return (
    <>
      <p> </p>
    </>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
