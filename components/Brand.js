import React from 'react'
import { Title } from './common/Title'
import { brand } from '../assets/data/dummydata'
const Brand = () => {
  return (
    <>
    <div className='brand'>
        <div className='container'>
        <div className='heading-title'>
              <Title title = "WE'RE PROUD TO WORK WITH THESE COMPANIES" />
        </div>
        <div className='brand-content grid-6 py'>
        
            {brand.map( (item) =>(
              <div className='images' key={item.id} >
                <img src={item.cover} alt={item.cover} width='100%' height='100%' />
              </div>
            ))}
          </div>

        </div>

    </div>

    </>
  )
}

export default Brand