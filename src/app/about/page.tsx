import AboutHero from '@/components/about/hero'
import Highlights from '@/components/about/highlights'
import SelectedWorks from '@/components/about/SelectedWorks'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col w-full items-center min-h-screen font-roboto'>
       <AboutHero/>
       <Highlights/>
       <SelectedWorks/>
      
    </div>
  )
}

export default About
