import React, { useState } from 'react';
import Card from './Card.js';

const LoadButton2 = () => {

    const [state, setState] = useState({
        feed: []
    })

    // 1. Create a function called loadFeed
    // 2. Make a fetch request to `https://jsonplaceholder.typicode.com/albums/1/photos`
    // 3. use .then() to convert the reponse with json()
    // 4. use .then() to update state.feed

    const loadFeed = () => {
        setState({...state, preloader: true})

        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
        
        .then(response => response.json())

        .then(json => {
            setState({
                feed: json
            })
        })
    }
    
    
    if(state.feed.length === 0) {
        return(
            <button onClick={loadFeed}>Load</button>
        )
    } else {
        return (
            <Card 
                title="Train"
                description="Train that almost hit me"
                buttonLabel="Read More"
                image="https://images.unsplash.com/photo-1581087085927-0accb64abb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            />
        )
    }

}

export default LoadButton2;