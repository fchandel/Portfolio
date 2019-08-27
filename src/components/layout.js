/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Particles from 'react-particles-js'

import Header from "./header"
import "./layout.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {/* <Particles
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              shape: {
                type: 'polygon',
                stroke: {
                  width: 2,
                  color: 'white',
                },
                polygon: {
                  nb_sides: '8'
                }
            }
            },
          }}
          style={{
            width: '100%',
            backgroundColor: `#5e0005` ,
            // position: 'absolute',
            zIndex: '-1',
            marginBottom: '10px' 
          }}/> */}
        <link href="https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap" rel="stylesheet"/> 
        <main>{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
