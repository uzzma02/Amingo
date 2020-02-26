import React from 'react';

function Banner(prop) {
    const myStyle = {
        "max-width":"50%",
        "height": "20%"
    }

    return(
        <div className="jumbotron">
            <div style={myStyle}>
                <img src={prop.image}/>
            </div> 

        </div>
        
    )
}
export default Banner;