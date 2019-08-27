import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js'
import "./custom.css"
import 'bootstrap/dist/css/bootstrap.css';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery/dist/jquery.js'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

class IndexPage extends Component {

  componentDidMount () {
    $('body').on({
      'touchmove': function(e) { 
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
                    "opacity": 0.4,
                    "width": 1
                  },
                },
              }}
              style={{
                width: '100%',
                // backgroundColor: `white` ,
                background: "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgb(238, 237, 237) 0%, rgb(255, 255, 255) 100%) repeat scroll 0% 0%",
                position: 'absolute',
                zIndex: '-1',
                marginBottom: '10px', 
                color: '#5e0005'
              }}
            />  
            {/* <ParallaxLayer offset={0} speed={1} style={{ opacity: 1 }}> */}
        
              <div className='landing'>

                <h1 className='main-font'>Hi, I'm Farhan</h1>
                <p className='sub-heading'>I believe problems are like puzzles and I enjoy solving them through coding.</p>
                <div className='scroll-indicator'></div>
              </div>
            {/* </ParallaxLayer> */}
          {/* </ParallaxLayer> */}
        </div>

        {/* <ParallaxLayer offset={0} speed={1} style={{ opacity: 1 }}> */}

          <div className='to-scew'>
            <div className='projects' >
              {/* <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 1 }}> */}

                <h3 className='heading-title center custom-color'><span className='yellow'>P</span>rojects</h3>
                <div className='project-list row'>
                  <div className='col-sm-12 col-md-6'>
                    <Link to="/spiker/">
                      <div className='project-item'>
                        <h4 className='project-title'>
                          Spiker
                        </h4>
                        <p className='desc'>A bookkeeping and expense tracking web and mobile application using <b>Sails Js</b>.</p>
                      </div>
                    </Link>
                  </div>

    
            
                  <div className='col-sm-12 col-md-6'>
                    {/* <Link to="/"> */}
                      <div className='project-item'>
                        <h4 className='project-title'>
                          Korecki (Coming Soon)
                        </h4>
                        <p className='desc'> CPAS (Client Property Account System) for property management.</p>
                       
                      </div>
                    {/* </Link> */}
                  </div>

                  {/* <div className='col-sm-12 col-md-6'>
                    <Link to="/page-2/">
                      <div className='project-item'>
                        <h4 className='project-title'>
                          Oral Habilitaion
                        </h4>
                        <p className='desc' style={{fontSize: '15px', paddingTop: '10px'}}> A cross platform mobile application to help educate clients</p>
                      </div>
                    </Link>
                  </div> */}

                  {/* <div className='col-sm-12 col-md-6'>
                    <Link to="/page-2/">
                      <div className='project-item'>
                        <h4 className='project-title'>
                          Calico Website
                        </h4>
                        <p className='desc' style={{fontSize: '15px', paddingTop: '10px'}}> 
                          Website my Co-Op organization
                        </p>

                      </div>
                    </Link>
                  </div> */}
            
                </div>
              {/* </ParallaxLayer> */}
            </div>


        
          </div>

          <div>
            <div className='description'>
              <h3 className='heading-title custom-color'><span className='yellow'>A</span> brief intro</h3>
              <div className='center margin-center col-md-8'>
              <Img className='image float-left' fluid={this.props.data.imageOne.childImageSharp.fluid} />
              <p className='bio body-font'>
                Hi, I'm Farhan. I am a Software Developer in the making. I am currently pursuing a Software Systems Degree at Simon Fraser University. <br/><br/>I think of problems like puzzles and enjoy solving them through coding. I learn best by diving into mini projects, making mistakes and then learning from them. <br/><br/> When I'm not busy with school or work you can find me with
                friends and family or in the gym. When the season comes around, you can also find me in the beautiful mountains of B.C
                enjoying a strenuous but rewarding hike.
                </p>
              </div>
            </div>
          </div>

          <div className='skill-section center p-100 '>
            <h3 className='heading-title custom-color'><span className='yellow'>L</span>anguages & Frameworks I've worked with</h3>
            <div className='tech-badge-list'>
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
              <br/>
              <div className='tech-badge'>
                <b>Java</b>
              </div>
              <div className='tech-badge'>
                <b>C#</b>
              </div>
              <div className='tech-badge'>
                <b>JaveScript</b>
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
            </div>
          </div>


          <div className='social clear'>
            <div className="social-content">
              <h3 className='heading-title center white'>Get In Touch</h3>
              <p className='body-font'>
                Add me on <a href='https://www.linkedin.com/in/farhan-chandel/'><b>LinkedIn</b></a> and send me a message!
              </p>
            </div>

          </div>

          <div className='contact'>
            <br/>
            <br/>
            <h3 className='heading-title center white'>Resume</h3>
            <p className='body-font'>
              View my resume <a href='https://drive.google.com/file/d/1i6Us7jQfQR2_0LICViqBRcTQAhmZBy8C/view?usp=sharing'><b>here</b></a>
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