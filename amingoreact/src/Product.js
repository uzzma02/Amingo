import React from 'react';

const Product = (prop) => {
    
    console.log(prop);
    
    return(
        <div className="page">
            <h1>Product</h1>
            <h2> You are viewing {prop.match.params.productName}</h2>
        </div>
    )
}
export default Product;