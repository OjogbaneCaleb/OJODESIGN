import React, { useEffect } from 'react'
import Link from 'next/link'
import {TitleLogo} from './Title'
import { useRouter } from 'next/router'
import { useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu4Line } from 'react-icons/ri';

const Header = () => {
  const [activeLink, setActiveLink] = useState('')
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect( ()=>{
    setActiveLink(router.pathname)
  },[router.pathname])


  return (
    <>
    <header className="h-16 flex items-center justify-between bg-black">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <TitleLogo  title= 'JONSON' caption='001' className='logomin' />
          </Link>
      </div>
      <nav className= {open ? 'openMenu' : 'closeMenu'} onClick={()=>setOpen(null)}>
        <Link href="/" className= {activeLink === '/' ? "activeLink" : "none"}>Home</Link>
        <Link href="/agency" className= {activeLink === '/Agency' ? "activeLink" : "none"}>Agency</Link>
        <Link href="/team" className= {activeLink === '/Team' ? "activeLink" : "none"}>Team</Link>
        <Link href="/services" className= {activeLink === '/Services' ? "activeLink" : "none"}>Services</Link>
        <Link href="/contact" className= {activeLink === '/Contact' ? "activeLink" : "none"}>Contact</Link>
        <button className="button-Primary" >book a consultation</button>
      </nav>
      <button className='menucontrol' onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />} </button>
      </div>
     </header>
    </>
  )
}

export default Header