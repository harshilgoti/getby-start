import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import imgs from "../../public/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/1.jpg"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
console.log(data)
  return <img src={imgs} alt="imageas" style={{height:"200px",width:"200px"}}/>
}

export default Image
