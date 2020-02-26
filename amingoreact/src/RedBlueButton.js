import React, {useState} from 'react';

const RedBlueButton = () => {

    //Destrtucturing useState
    const [state, setState] = useState({ //returns an array ['arguement, ()=>{}]
        //creating 2 constants in 1 line
        label: "blue",
        btnClass: "btn-primary"
    }
    )

    const changeColor=()=> {
        if(state.label === "blue") {
            setState({label: "red", btnClass:"btn-danger"});
        } else {
            setState({label: "blue", btnClass:"btn-primary"});
        }
    }

    return (
        <button 
        onClick={changeColor} 
        className={`btn ${state.btnClass}`}>
        {state.label}</button>
    )
}

export default RedBlueButton;