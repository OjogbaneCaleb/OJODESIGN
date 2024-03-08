import Link from 'next/link'
import React from 'react'
import {TitleSm} from "@/components/common/Title"
import {HiOutlineArrowRight} from 'react-icons/hi'

export const Card = ({data, caption, show, path}) => {
  return (
    <>
    <div className='card'>
        <div className='card-img'>
            <img src={data.cover} alt={data.title} />
            <div className='card-details'>
              <Link href={'${path}/${data.id}'} className='title.link' >
                <TitleSm title = {data.title} />
                 </Link>
                 {caption && (
                  <Link href={'${path}/${data.id}'}  >
                  {caption} <HiOutlineArrowRight className= 'link-icon' />
                  </Link>
                 ) }
                 <div className='flex'>
                  <span>{data.category}</span> {data.date && <span> / {data.date}  </span>}
                 </div>
                 {show && (
                  <ul>
                    {data.desc.map((text,i)=>(
                      <li key={i} > -{text.text} </li>
                    ) ) }
                  </ul>
                 )}
            </div>







            
        </div>






    </div>

    </>
  )
}
