import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Work from './Work'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Work}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App