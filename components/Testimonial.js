import React from 'react'
import {Title} from "@/components/common/Title"
import{testimonial} from "@/assets/data/dummydata"
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider from "react-slick";
import {RiArrowRightLine} from 'react-icons/ri'
import {RiArrowLeftLine} from 'react-icons/ri'
function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div className='slick-arrow' onClick={onClick} >
        <button className='next' onClick={onClick}>
            <RiArrowRightLine />
        </button>
        </div> );
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='slick-arrow' >
          <button className='prev' onClick={onClick}>
              <RiArrowLeftLine />
          </button>
          </div> );
  }
const Testimonial = () => {
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
          ]
        };
  return (
    <>
    <section className='testimonial'>
        <div className='container'>
        <div className='heading-title'>
              <Title title = 'WHAT CLIENTS SAY ABOUT OUR WORK' />
              <p>We offer the most fantastic services to fit your every need, and we don't just stop there, we are ready to satisfy your every website desire, feedback and design intuition</p>
          </div>
          <div className="cards">
          <Slider {...settings}>
            {testimonial.map( (user,i) =>(
                <div key={i}>
              <div className="card">
                <div className='image'>
                    <div className='img'>
                        <img src={user.cover} alt='' />
                    </div>
                    <div className='img-text' >
                        <h3>{user.name}</h3>
                        <span>{user.post}</span>
                    </div>
                </div>
                <div className='details'>
                    <p>{user.desc}</p>
                    <Link href='/#'> VIEW CASE <HiOutlineArrowRight className='link-icon' />{" "}
                     </Link>
                    </div>
              </div>  
        </div>
            ))}
            </Slider>
        </div>
        </div>

    
    </section>
    </>
  )
}    

export default Testimonial