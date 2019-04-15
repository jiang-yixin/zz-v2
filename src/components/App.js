import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Work from './Work'
import About from './About'
import Contact from './Contact'

import Work1 from './works/Work1'
import Work2 from './works/Work2'

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header />
        <Route path="/" exact component={Work}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>

        <Route path="/works/1" component={Work1}/>
        <Route path="/works/2" component={Work2}/>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App