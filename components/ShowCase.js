import React from 'react'
import { showcase } from '../assets/data/dummydata'
import { Title } from './common/Title'
import { Card } from './common/Card'
import { HiOutlineArrowRight } from 'react-icons/hi'
import Link from 'next/link'
const ShowCase = () => {
  return (
    <>
    <section className='showcase'>
          <div className='container'>
            <div className='heading-title'>
              <Title title = 'SELECTED CASES' />
              <p>We offer the most fantastic services to fit your every need, and we don't just stop there, we are ready to satisfy your every website desire, feedback and design intuition</p>
          </div>
          <div className="hero-content grid-4">
            {showcase.map( (item) =>(
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className='card links'>
          <Link href='/#'> VIEW CASE <HiOutlineArrowRight className='link-icon' />{" "}
                     </Link>

          </div>
          </div>
          </section>
    </>
  )
}

export default ShowCase