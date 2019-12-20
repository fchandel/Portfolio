import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js'
import "./custom.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery/dist/jquery.js'
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Spiker extends Component {

  componentDidMount() {
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
      <div className='cradle'>
        <div className='nav'>
          <Link to="/">Back To Home</Link>
        </div>
        <div className='project-main cradle-container'>
          <div className='project-intro-details'>
            <h3 className='heading-title center blue-color'>
              Cradle
              </h3>

            <div className='project-description-main col-md-6 col-sm-12'>
              <p className='sub-heading'>
                <a href="https://spikerapp.com/">Cradle</a> is a web and mobile application built for medical professionals
                on the fields to manage, assist, and keep track of personel and patients who have been tested by the cradle device.
                </p>
            </div>

            <div className='tech-badge-list'>
              <div className='tech-badge'>
                Spring Boot
                </div>
              <div className='tech-badge'>
                ReactJs
                </div>
              <div className='tech-badge'>
                MongoDB
                </div>
            </div>

          </div>
        </div>


        <div className='wave-container'>
          <svg width="1440" height="332" viewBox="0 0 1440 332" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 226.2L80 213.594C160 201.459 320 175.541 480 188.5C640 201.459 800 250.941 960 251.294C1120 250.941 1280 201.459 1360 175.894L1440 150.8V377H1360C1280 377 1120 377 960 377C800 377 640 377 480 377C320 377 160 377 80 377H0V226.2Z" fill="#0099FF" />
          </svg>

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L1440,128L1440,320L0,320Z"></path></svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,117.3C840,117,960,171,1080,192C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        </div>

        <div className='blue-bg '>
          <div className='cradle-container grid-container'>
            <div className='white item-overview'>
              <h2 className='white'>Overview</h2>
              <p>This case study goes over in brief the web application side of this project as that was my area of assignment.
                  The Cradle web app was built from the ground up using Spring Boot, React, and MongoDB. Our team used Agile development and
                  thus we had three 4 week sprints leading up to the final product. To skip to a video demonstration of the final product you can click here.
              </p>
            </div>

            <div className='white item-tools'>
              <div className='border-box'>
                <h2>Details</h2>
                <p>Roles: Fullstack Developer</p>
                <p>Duration: 3 months</p>
                <p>Other members: <br />
                  Brian Marwood <br />
                  Correy See <br />
                  Tony Trieu <br />
                  Gabby <br />
                  Josiah <br />
                  Khang <br />
                  Richard
                </p>
              </div>
            </div>



          </div>
        </div>

        <div className='svg-container'>
          <svg width="1440" height="374" viewBox="0 0 1440 374" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1469 149.6L1377.17 162.106C1285.33 174.144 1101.67 199.856 918 187C734.333 174.144 550.667 125.056 367 124.706C183.333 125.056 -0.333344 174.144 -92.1667 199.506L-184 224.4V3.8147e-05H-92.1667C-0.333344 3.8147e-05 183.333 3.8147e-05 367 3.8147e-05C550.667 3.8147e-05 734.333 3.8147e-05 918 3.8147e-05C1101.67 3.8147e-05 1285.33 3.8147e-05 1377.17 3.8147e-05H1469V149.6Z" fill="#0099FF" />
          </svg>


        </div>

        <div className='cradle-container'>
          <h2><b>Background</b></h2>
        </div>
        <div className='cradle-container background-section'>
          <h2>Cradle Device</h2>
          <p>
            The Cradle deivice was created as an inexpensive hand held vital measurement
            solution for low income areas to combat preventable maternal deaths by providing
            an easy and effective way to monitor and detect early symptoms and issues.
          </p>

          <h3>Challanges</h3>
          <p>
            - Due to the manual nature of device, either forms are filled out
                incorrectly or lost
            - Health workers at facilities don’t follow through on filling out forms
            - Forms are not returned to workers,
            - There is no way to easy way to track and collect data from the forms
            - Stock piles of forms and papers that keep stacking up without being
                properly processed.
          </p>

          <h3>Our System</h3>
          <p>
            This is were our system comes in. Our system is designed to streamline this process while ensuring that
            no data is lost, and incorrectly filled out. With our systems, workers have access to the forms and data at
            all times and are held accountable. The dynamic report capabilities built into the system can sort,
            aggregate, and enable workers to visualize data and see statistics that would have been extremely time
            consuming and most likely infeasible.
          </p>
        </div>

        <div className='cradle-container'>
          <h2><b>Process</b></h2>

          <div className='process-grid'>
            <div className='item-process'>
              - Gathered user requirements via QA sessions with the client <br />
              - Inspected purpose, domain, and given information to infer use
                cases by breaking down said information <br />
              <br />
              - Analyzed user requirements and use cases to create CRC cards
                  and rough database schema <br />
              - CRC cards were further used to build out functional models and
                  UML diagrams. <br />
              <br />
              - Created initial rough wireframes and sketches to give us an initial
                  idea of pages and useful information. <br />
              <br />
              - With the wireframes, models and database up, we proceeded to
                  implement pages and features. working from our backlog. <br />
              Updating the backlog with new features as needed. <br />
              <br />
              - Manual Testing was done after the completion of each feature
                  by team members before merging the merge request. <br />
              - Area of Improvement: Suite of automatic test cases should have
                  been set up to pass after each implementation of a feature. <br />
              <br />
              - Refactoring done at the end of sprints. <br />
            </div>

            <div className='item-image-process'>
              <Img fluid={this.props.data.steps.childImageSharp.fluid} />
            </div>
          </div>
        </div>

        <div className='cradle-container blue-color'>
          <h2>Wireframes</h2>
          <p>We started this project off with some basic wireframes to get an idea of how to lay out our UI. </p>
          <Img fluid={this.props.data.imageThree.childImageSharp.fluid} />
        </div>

        <svg width="1278" height="330" viewBox="0 0 1278 330" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M683 0V330H0C441 273 683 0 683 0Z" fill="#0099FF" />
          <path d="M682 0V330H1365C924 273 682 0 682 0Z" fill="#0099FF" />
        </svg>

        <div className='svg-container blue-bg'>
          <div className='white cradle-container'>
            <h2 className='white'>End Product Mini Presentation</h2>
            <p>Video demo of iteration 1 4 week sprint update.</p>
            <Img fluid={this.props.data.placeholder.childImageSharp.fluid} />
          </div>
        </div>



      </div >
    );
  }
}


export default Spiker

export const pageQuery2 = graphql`
  query {
    imageOne: file(relativePath: { eq: "spiker.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageTwo: file(relativePath: { eq: "Vector.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageThree: file(relativePath: { eq: "wireframe.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    steps: file(relativePath: { eq: "steps.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    arrow: file(relativePath: { eq: "arrow.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;