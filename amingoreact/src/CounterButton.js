import React, {useState} from 'react';

const CounterButton = ()=> {

    const [state, setState] = useState(0);

    const increaseCount=()=>{
        setState(state + 1);
    }

    return (
        <button
        onClick={increaseCount}>
            {`count: ${state}`}
        </button>
    )
}

export default CounterButton;