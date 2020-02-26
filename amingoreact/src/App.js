import React, {useState, useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from './AppContext.js';
import LandingPage from './LandingPage.js';
import About from './About.js';
import Contact from './Contact.js';
import Product from './Product.js';
import Navigation from './Navigation.js'

const App = () => {
  
  const [globalState, setGlobalState] = useState(
    {
      loggedIn: true
    }
  )

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>

      <Navigation/>

        <BrowserRouter>

          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/product/:productName" isExact component={Product} />
          </Switch>
        
        </BrowserRouter>

      <FeedForm/>
      
    </AppContext.Provider>
  )
}
export default App;