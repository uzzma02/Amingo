import React, {useState} from 'react';

const NewsletterBanner = () => {

    const [state, setState] = useState(
        {saved: false}
    )

    const save = () => {
        setState({...state,saved: true})
    }

        return (
            <div class="jumbotron">
                <div class="container" style={{"max-width": "600px"}}>
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>It uses utility for typography and spacing to space content out within the larger container.</p>
                    
                    {
                        !state.saved &&
                    
                    <div class="input-group mb-6">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div class="input-group-append">
                        
                        
                            <button 
                            onClick={save}
                            class="btn btn-outline-secondary" 
                            type="button" id="button-addon2">
                                Button
                            </button>
                         
                        </div>
                    </div>
                }
                  {
                    state.saved &&
                    <div class="alert alert-success" role="alert">
                        You have been successfully subscribed!
                    </div>
                 }
                </div>
            </div>
        )
    
 
}

export default NewsletterBanner;