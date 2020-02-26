import React, {useState} from 'react';

const SaveButton = (prop) => {

    const [state, setState] = useState(
        {saved: false}
    )
    
    const save = () => {
        setState({saved: true})
    }
 
    if(state.saved === false) {
        return (
            <button
            onClick={save}
            disabled={save.saved}
            width={prop.width}
            className="btn btn-primary">
                Save
            </button>
        )
    }
    else {
        return (
            <div class="alert alert-success" role="alert">
                Your info has been saved!
            </div>
        )
    }
}

export default SaveButton;