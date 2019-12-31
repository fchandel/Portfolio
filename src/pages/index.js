import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js'
import "./custom.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery/dist/jquery.js'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

class IndexPage extends Component {

  componentDidMount() {
    $('body').on({
      'touchmove': function (e) {
        $('.scroll-indicator').addClass('display-none');
      }
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />

        {/* <Parallax scrolling={true} ref={ref => (this.parallax = ref)} pages={2.5}> */}
        <div className='main-canvas'>
          {/* <ParallaxLayer offset={0} speed={1} style={{ opacity: 1 }}> */}

          <Particles
            className='particles'
            params={{
              particles: {
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 1000
                  }
                },
                shape: {
                  type: 'polygon',
                  stroke: {
                    width: 2,
                    color: '#5e0005',
                  },
                  polygon: {
                    nb_sides: '8',
                  }
                },
                color: {
                  value: '#5e0005',
                },
                line_linked: {
                  "enable": true,
                  "distance": 130,
                  "color": "#5e0005",
                  "opacity": 0.3,
                  "width": 1
                },
              },
            }}
            style={{
              width: '100%',
              background: "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgb(238, 237, 237) 0%, rgb(255, 255, 255) 100%) repeat scroll 0% 0%",
              position: 'absolute',
              zIndex: '-1',
              marginBottom: '10px',
              color: '#5e0005'
            }}
          />
          {/* <ParallaxLayer offset={0} speed={1} style={{ opacity: 1 }}> */}

          <div className='landing main-color'>

            <h1 className='main-font main-color'>Hi, I'm Farhan</h1>
            <p className='sub-heading'>I believe problems are like puzzles and I enjoy solving them through coding.</p>
            <div className='scroll-indicator'></div>
          </div>
          {/* </ParallaxLayer> */}
          {/* </ParallaxLayer> */}
        </div>



        {/* <ParallaxLayer offset={0} speed={1} style={{ opacity: 1 }}> */}
        <div className='large-desktop'>

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5e0005" fill-opacity="1" d="M0,96L1440,256L1440,320L0,320Z"></path></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5e0005" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
          <div className='main-color-bg'>
            <h3 className='heading-title pb-0 center white'>Projects</h3>



            <div className='projects' >
              {/* <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 1 }}> */}
              <div className='project-list row'>

                <div className='col-sm-12 col-md-6'>
                  <Link to="/cradle/">
                    <div className='project-item main-color'>
                      <h3 className='project-title'>
                        Cradle
                      </h3>
                      <p className='desc'>Management system built for medical professionals using <b>Spring Boot</b> & <b>ReactJs</b></p>

                    </div>
                  </Link>
                </div>

                <div className='col-sm-12 col-md-6'>
                  <Link to="/">
                    <div className='project-item main-color'>
                      <h3 className='project-title'>
                        Spiker (Coming Soon)
                        </h3>
                      <p className='desc'>A bookkeeping and expense tracking web and mobile application using <b>Sails Js</b>.</p>
                    </div>
                  </Link>
                </div>


              </div>
              {/* </ParallaxLayer> */}
            </div>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5e0005" fill-opacity="1" d="M0,96L1440,288L1440,0L0,0Z"></path></svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5e0005" fill-opacity="1" d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,117.3C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}


          <svg width="1435" height="226" viewBox="0 0 1435 226" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1442 223.01L1361.89 207.081C1281.78 191.152 1121.56 159.293 961.333 164.57C801.111 170.245 640.889 212.059 480.667 223.01C320.444 233.962 160.222 212.059 80.1111 201.805L0.00012207 191.152V0H80.1111C160.222 0 320.444 0 480.667 0C640.889 0 801.111 0 961.333 0C1121.56 0 1281.78 0 1361.89 0H1442V223.01Z" fill="#5E0005" />
          </svg>


        </div>


        <div className='description-container'>
          <div className='description'>
            <h3 className='heading-title main-color'>A brief intro</h3>
            <div className='center margin-center col-md-8'>
              <Img className='image float-left' fluid={this.props.data.imageOne.childImageSharp.fluid} />
              <p className='bio body-font'>
                Hi, I'm Farhan. I am a Software Developer in the making. I am currently pursuing a Software Systems Degree at Simon Fraser University. <br /><br />I think of problems like puzzles and enjoy solving them through coding. I learn best by diving into mini projects, making mistakes and then learning from them. <br /><br /> When I'm not busy with school or work you can find me with
                friends and family or in the gym. When the season comes around, you can also find me in the beautiful mountains of B.C
                enjoying a rewarding hike.
                </p>
            </div>
          </div>
        </div>

        <div className='skill-section large-desktop center p-100 '>
          <h3 className='heading-title main-color'>Languages & Frameworks I've worked with</h3>
          <div className='tech-badge-list'>
            <row className='tech-badge-list-row'>

              <div className='tech-badge'>
                <b>React Js</b>
              </div>
              <div className='tech-badge'>
                <b>Python</b>
              </div>
              <div className='tech-badge'>
                <b>C++</b>
              </div>
              <div className='tech-badge'>
                <b>Gatsby Js</b>
              </div>
              <div className='tech-badge'>
                <b>PHP</b>
              </div>
              <div className='tech-badge'>
                <b>CakePHP</b>
              </div>
            </row>

            <row className='tech-badge-list-row'>

              <div className='tech-badge'>
                <b>Java</b>
              </div>
              <div className='tech-badge'>
                <b>C#</b>
              </div>
              <div className='tech-badge'>
                <b>JavaScript</b>
              </div>
              <div className='tech-badge'>
                <b>React Native</b>
              </div>
              <div className='tech-badge'>
                <b>Bootstrap</b>
              </div>
              <div className='tech-badge'>
                <b>Spring Boot</b>
              </div>
            </row>

          </div>
        </div>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5e0005" fill-opacity="1" d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className='contact'>
          <div className="">
            <h3 className='heading-title center white'>Get In Touch</h3>
            <p className='body-font'>
              Add me on <a href='https://www.linkedin.com/in/farhan-chandel/'><b><span className='links'>LinkedIn</span></b></a> and send me a message!
              </p>
          </div>
          <br />
          <br />
          <h3 className='heading-title center white'>Resume</h3>
          <p className='body-font'>
            View my resume <a href='https://drive.google.com/file/d/1cb6vu_SrVHZB5uTKOVX23NQluM3F0UHk/view?usp=sharing'><b>here</b></a>
          </p>
        </div>

        {/* </ParallaxLayer> */}


        {/* </Parallax> */}

      </Layout>

    );
  }
}


export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;