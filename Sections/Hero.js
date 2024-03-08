import {TitleLogo} from "@/components/common/Title"
import {TitleSm} from "@/components/common/Title"
import {home} from "@/assets/data/dummydata"
import {Title} from "@/components/common/Title"
import Expertise from "../components/Expertise"
import Banner from "../components/Banner"
import Testimonial from "../components/Testimonial"
import ShowCase from "../components/ShowCase"
import Brand from "../components/Brand"

const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <TitleLogo title= "JONSON's DESIGN" caption="O1" className="logobg"  />
                <h1 className='hero-title'>WE DO WHAT WE'RE TOLD</h1>
                <div className="sub-heading">
                  <TitleSm title = 'WEBSITES' /> <span>.</span>
                  <TitleSm title = 'BRANDING' /> <span>.</span>
                  <TitleSm title = 'DIGITAL MARKETING' /> <span>.</span>
                </div>
            </div>
        </section>
        <div className='hero-sec'>
          <div className='container'>
            <div className='heading-title'>
              <Title title = 'OUR EXPERTISE' />
              <p>We offer the most fantastic services to fit your every need, and we don't just stop there, we are ready to satisfy your every website desire, feedback and design intuition</p>
          </div>
          <div className="hero-content grid-4">
            {home.map( (item,i) =>(
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
                </div>
            ))}
          </div>
          </div>
          </div>
          <div className="hero-sec"></div>
          <Expertise />
          <Banner />
          <Testimonial />
          <ShowCase />
          <Brand />
          
          
        

        
    </>
  )
}

export default Hero