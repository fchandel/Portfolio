import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js'
import "./custom.css"
import 'bootstrap/dist/css/bootstrap.css';
import {useSpring, animated} from 'react-spring'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery/dist/jquery.js'
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Spiker extends Component {

  componentDidMount () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
        $('.nav').addClass('floating-nav');
      } else {
        $('.nav').removeClass('floating-nav');
      }
    })
  }

  render() {
    return (
      <div className='spiker'>
        <div className='nav'><Link to="/">Back To Home</Link></div>
 
          <div className='project-main'>
            <div className='project-intro-details'>
              <h3 className='heading-title center main-color'>
                Spiker
              </h3>

              <div className='project-description-main main-color col-md-6 col-sm-12'>
                <p className='sub-heading'>
                  <a href="https://spikerapp.com/">Spiker</a> is a subscription based web and mobile application that is meant to help 
                  users bookkeep, track their finances and help them save time and money.
                </p>
              </div>

              <div className='tech-badge-list'>
                <div className='tech-badge'>
                  Sails Js
                </div>
                <div className='tech-badge'>
                  AWS Lambda
                </div>
                <div className='tech-badge'>
                  Amazon S3
                </div>
              </div>

            </div>
            
          </div>

        <div className='project-description main-color-bg center p-50'>
          <div className='max-width-1200'>

            <h3 className='center heading-title white'><span className='yellow'>O</span>verview</h3>
            <p className='max-width-80 p-10 align-left'><i>As this is an active and private software which I worked on during my coop, I am unable to talk about some details. However you can feel free to ask me for my refrences where I can
            re-direct you to my supervisor on the project who can help give you an insight to my performance.</i>
            <br/><br/>
            During the final months of coop, I was tasked to work on Spiker.
            Spiker was a live project but outdated and needed updating and some TLC.

            My responsibilites included (but not limited to):
            <br/>
            <br/>
            <ul>
              <li>Performing a major version upgrade</li>
              <li>Integrating AWS Lambda</li>
              <li>Refactoring</li>
              <li>Updating Unit Tests, implementing new ones</li>
              <li>Fixing reported bugs</li>
            </ul> 
            <br/>
            Working on Sails Js was a new experience and upgrading the app's version to V1.0 from it's previous versions was a bit challenging; due to its many breaking changes. I was responsible for fixing the many breaking changes along with a colleague, finding and integrating new libraries to replace outdated ones, refactoring code and fixing unit tests to align with the new changes.
            After the upgrade, I (along with a colleague) worked with AWS Lamda and Amazon s3 to build out certain functionalities of the software. That was a fun experience where I learned a lot about AWS services and S3 buckets. 
            <br/><br/>
            You can check out the live website <a classnName='alt-link' href="https://spikerapp.com/"><b>here</b></a>
            <br/><br/>
            </p>
            </div>

        </div>

      </div>
    );
  }
}


export default Spiker

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "spiker.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;