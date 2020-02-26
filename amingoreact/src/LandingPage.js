import React, {useState, useContext} from 'react';
import AppContext from './AppContext';

import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation.js';

import Banner from './Banner.js';
import RedBlueButton from './RedBlueButton.js';
import CounterButton from './CounterButton.js';
import SaveButton from './SaveButton.js'
import NewsletterBanner from './NewsletterBanner.js';
import LoadButton2 from './LoadButton2.js';
import LoadFeedButton from './LoadFeedButton.js';


function LandingPage() {
  
//   const [globalState, setGlobalState] = useState(
//     {
//       loggedIn: true
//     }
//   )

  return (

        <div className="App">
          <Navigation/>
          <Banner
            image="https://pngimage.net/wp-content/uploads/2018/05/background-for-banner-png-4.png"/>
          
          <NewsletterBanner/>
    
            
          <center>
            <SaveButton label="Save"/>
            <RedBlueButton/>
            <CounterButton/>
            <LoadFeedButton/>
          </center>

      
        
          <CardLayout>
            <Card 
              image="https://images.unsplash.com/photo-1473277087567-8e0937304e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
              title="Yosemite" 
              description="Half Dome and more!"
              button="Explore" />

            <Card 
              image="https://images.unsplash.com/photo-1564166489645-fb4831b35df8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              title="Mammoth Lakes"
              description="Lakes and more"
              button="Explore"/>

            <Card
              image ="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              title="California"
              description="Beautiful nature"
              button="Explore"/>
          </CardLayout>
      </div>
    
  );
}

export default LandingPage;
