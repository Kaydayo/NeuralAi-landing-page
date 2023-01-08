import React from 'react'

import { Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Features, Header, NeuralAi3 } from './containers'
import './App.css'

const App = () => {
  return (
      <div className='App'>
          <div className='gradient__bg'>
              <Navbar />
              <Header/>
          </div>

          <Brand />
          <NeuralAi3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer/>
     </div>
  )
}

export default App