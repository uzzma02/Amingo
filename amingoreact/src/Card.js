import React from 'react';

const Card = (prop) => {
    const myStyle = {
      "width": "18rem"
    }
    
    return(
      <div className="card" style={myStyle}>
        <img src={prop.image} className="card-img-top" alt="..."/>
  
        <div className="card-body">
          <h5 className="card-title">{prop.title}</h5>
          <p className="card-text">{prop.description}</p>
          <a href="#" className="btn btn-primary">{prop.button}</a>
        </div>
      </div>
    )
}

  export default Card;