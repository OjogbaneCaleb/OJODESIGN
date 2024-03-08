import React from 'react'
import { Title, TitleLogo } from './common/Title' 
const Banner = () => {
  return (
    <div>
        <section className='banner'>
            <div className='container'>
                <div>
                    <Title title="We're Looking Forward to start a new project" />
                    <TitleLogo title="Let's take YOUR business to the next level!" />

                </div>
                <div>
                <button className='button-primary'>Request a call back</button>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Banner