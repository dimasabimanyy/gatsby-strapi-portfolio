import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import heroImg from "../assets/hero.jpg"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import Aos from "aos";
import "aos/dist/aos.css"

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const Hero = () => {

  const { file: { childImageSharp: {fluid} } } = useStaticQuery(query);

  useEffect(() => {
    Aos.init({})
  }, []);
  
  return (
    <section className="hero">
      <div className="hero-wrap container"  data-aos="fade-up">
        <div className="social-account-wrap">
           <h4>
            Follow Me - <Link to="/"><span>Inst.</span></Link> / <Link to="/"><span>Tw.</span></Link> / <Link to="/"> <span>Fb.</span></Link> / 
          </h4>
        </div>
        <div className="hero-box">
          <img src={heroImg} alt="hero image" className="hero-image" data-aos="flip-left" data-aos-duration="1300"/>    
          <div className="hero-box-info">
          <p className="specialist">
            Full Stack Web Developer
          </p>
          <h1>
            Hi, I'm Dimas Abimanyu.
          </h1>
          <p className="hero-sub-info">
          We’ve created a unique visual system and strategy across the wide existing spectrum of visible mobile applications and found yourself...
          </p>
          <div className="hero-icon-wrap">
            {/* <FaGithub />
            <FaYoutube /> */}
            <h4>
              <Link to="/">
                Show Project
                <FaArrowRight className="arrow-hero"/>
              </Link>
            </h4>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
