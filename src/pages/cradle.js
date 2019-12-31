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
          <Link to="/">Back Home</Link>
        </div>
        <div className='project-main cradle-container'>

          <div className='project-intro-details'>
            <h1 className='main-title center blue-color'>
              CRADLE
            </h1>

            <div className='project-description-main col-md-6 col-sm-12'>
              <p className='sub-heading'>
                <a href="https://spikerapp.com/">Cradle</a> is a web and mobile application built for medical professionals
                on the field to manage, assist, and keep track of personel and patients who have been tested by the cradle device.
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
          <svg  viewBox="0 0 1440 332" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 226.2L80 213.594C160 201.459 320 175.541 480 188.5C640 201.459 800 250.941 960 251.294C1120 250.941 1280 201.459 1360 175.894L1440 150.8V377H1360C1280 377 1120 377 960 377C800 377 640 377 480 377C320 377 160 377 80 377H0V226.2Z" fill="#5e0005" />
          </svg>

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L1440,128L1440,320L0,320Z"></path></svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,117.3C840,117,960,171,1080,192C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        </div>

        <div className='blue-bg alt-text'>
          <div className='cradle-container grid-container'>
            <div className='white item-overview'>
              <h2 className='white'>Overview</h2>
              <p>This case study goes over in brief the web application side of this project as that was my area of assignment.
                  The Cradle web app was built from the ground up using Spring Boot, React, and MongoDB. Our team used Agile development and
                  thus we had three 4 week sprints leading up to the final product. To skip to a video demonstration of the final product you can click <a href="#video"><b>here</b></a>.
              </p>
            </div>

            <div className=' item-tools'>
              <div className='border-box white'>
                <p>Roles: Fullstack Developer <br />
                  Duration: 3 months <br />
                  Other members:</p>
                <p className='members'>
                  • Brian Marwood <br />
                  • Correy See <br />
                  • Tony Trieu <br />
                  • Gabby <br />
                  • Josiah <br />
                  • Khang <br />
                  • Richard
                </p>
              </div>
            </div>



          </div>
        </div>

        <div className='svg-container'>
          <svg viewBox="0 0 1440 374" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1469 149.6L1377.17 162.106C1285.33 174.144 1101.67 199.856 918 187C734.333 174.144 550.667 125.056 367 124.706C183.333 125.056 -0.333344 174.144 -92.1667 199.506L-184 224.4V3.8147e-05H-92.1667C-0.333344 3.8147e-05 183.333 3.8147e-05 367 3.8147e-05C550.667 3.8147e-05 734.333 3.8147e-05 918 3.8147e-05C1101.67 3.8147e-05 1285.33 3.8147e-05 1377.17 3.8147e-05H1469V149.6Z" fill="#5e0005" />
          </svg>
        </div>

        <div className='cradle-container spacer negative-margin'>
          <h3>Background</h3>
          <br />
          <div className='background-section'>
            <h4>Cradle Device</h4>
            <p>
              The Cradle deivice was created as an inexpensive hand held vital measurement
              solution for low income areas to combat preventable maternal deaths by providing
              an easy and effective way to monitor and detect early symptoms and issues.
          </p>

            <h4>Challanges</h4>
            <p>
              Due to the manual nature of device there were some issues that came up such as: <br /> <br />
              • Forms are filled out incorrectly or lost <br /> <br />
              • Health workers at facilities don’t follow through on filling out forms <br /> <br /> 
              • Forms are not returned to workers <br /> <br />
              • There is no way to easy way to track and collect data from the forms <br /> <br />
              • Stock piles of forms and papers keep stacking up without being properly processed. <br />
            </p>

            <h4>Our System</h4>
            <p>
              This is were our system comes in. Our system is designed to streamline this process while ensuring that
              the issues mentioned above and more are eliminated or mitigated. With our system, workers have access to the forms and data at
              all times and are held accountable. They are able to create, and record new patients, fill out forms, at any
              place, anytime. The dynamic report capabilities built into the system can sort, aggregate, and enable workers
              to visualize data and see statistics that would have been extremely time consuming and most likely infeasible.
          </p>
          </div>

        </div>

        <div className='cradle-container spacer'>
          <h3>Process</h3>

          <div className='process-grid'>
            <div className='item-process'>
              <div className='border-process'>
                • Gathered <b>user requirements</b> via QA sessions with the client <br />
                • Inspected purpose, domain, and given information to infer <b>use
                cases</b> by breaking down said information <br />
              </div>
              <br />

              <div className='border-process'>
                • Analyzed user requirements and use cases to create <b>CRC cards </b>
                and rough <b>database schema</b> <br />
                • CRC cards were further used to build out functional models and
                  <b> UML diagrams</b>. <br />
              </div>
              <br />

              <div className='border-process'>
                • Created initial rough <b>wireframes</b> and sketches to give us an initial
                  idea of pages and useful information. <br />
                • With the wireframes, models and database up, we proceeded to
                implement pages and features. working from our <b>backlog</b>. <br />
                • Updating the backlog with new features as needed. <br />
              </div>
              <br />
              <div className='border-process'>
                • Manual Testing was done after the completion of each feature
                  by team members before merging the merge request. <br />
                • Area of Improvement: Suite of automatic JUnit test cases should have
                  been set up to pass after each implementation of a feature. <br />
              </div>
              <br />

            </div>

          </div>
        </div>

        <div className='cradle-container spacer'>
          <h2>Wireframes</h2>
          <p>
            We started this project off with some basic wireframes to get an idea of how to lay out our UI.
            These were important and helpful in getting a clearer idea of how to order, display, and prioritize information.
          </p>
          <br />
          <Img classname='image-shadow' fluid={this.props.data.wireframe.childImageSharp.fluid} />
        </div>


        <div className='cradle-container spacer'>
          <h2>Responsibilities</h2>
          <p>
            I was responsible for developing certain key areas and features such as: <br /><br />
            <ul>
              <li>Worker Report Analysis and Generation (Front-end and Backend)</li>
              <li>Login/signup flow and capabilities (Front-end and Backend)</li>
              <li>Role management and role related functionalities (Front-end and Backend)</li>
              <li>Location management (Front-end and Backend)</li>
              <li>UI updates alongside Tony Trieu, and Brian Marwood </li>
              <li>etc</li>
            </ul>
          </p>
        </div>


        <div className='wave center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#5e0005" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,69.3C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

        </div>

        <div className='svg-container blue-bg alt-text'>
          <div id="video" className='cradle-container white'>
            <div>
              <h2 className='white'>End Product Mini Presentation</h2>
              <p>Video demo of final sprint update. Thanks to Brian Marwood for the voice over. </p>
              <iframe width="100%" height="500px" src="https://www.youtube-nocookie.com/embed/_R4ZQ5y2_HE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <Img fluid={this.props.data.placeholder.childImageSharp.fluid} /> */}
            </div>

            <div className='gitlab-section center p-100'>
              <h4 className='white'>Find code and running instructions at:</h4>
              <div className='gitlab-logo'>
                <a href='https://csil-git1.cs.surrey.sfu.ca/373-20197-Earth/cradleplatform'>
                  <Img fluid={this.props.data.gitlab.childImageSharp.fluid} />
                </a>
              </div>
            </div>

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
    },
    wireframe: file(relativePath: { eq: "wire.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    gitlab: file(relativePath: { eq: "gitlabLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    mockup: file(relativePath: { eq: "mockup.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;