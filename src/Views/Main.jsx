import React from 'react'
import Header from '../Componnents/Header/Header'
import Projects from '../Componnents/Banner/Projects/Projects'
import About from '../Componnents/About/About'
import Comments from '../Componnents/Banner/Comments/Comments'
import './Main.css'

function Main() {
  return (
    <div>
      <Header />
      <div className="container">
        <Projects />
      </div>
      <About />
      <div className="comments-bg container">
        <h2>Comments</h2>
        <Comments />
      </div>
    </div>
  )
}

export default Main