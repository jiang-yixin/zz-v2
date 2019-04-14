import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Work from './Work'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header />
        <Route path="/" exact component={Work}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App