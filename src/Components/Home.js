import React from 'react'
import Categories from './Categories'
import Ccd from './Ccd'
import Contact from './Contact'
import Offers from './Offers'

export default function Home() {
  return (
    <div>
      {/* these components construct the home page */}
        <Ccd/>
        <Offers/>
        <Categories/>
        <Contact/>
    </div>
  )
}
