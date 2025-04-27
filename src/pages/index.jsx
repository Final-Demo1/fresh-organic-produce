import React from 'react'
import { Welcome } from './Landing/Welcome'
import Hero from './Landing/Hero'
import Discovery from './Landing/Discovery'
import Reviews from './Landing/Reviews'
import UpcomingEvents from './Landing/UpcomingEvents'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <Discovery/>
        <Reviews/>
        <UpcomingEvents/>
        

    </div>
  )
}

export default HomePage