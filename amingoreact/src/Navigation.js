import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from './AppContext.js';

const Navigation = ()=> {

    const [globalState, setGlobalState] = useContext(
        AppContext
    )

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        )
    }

    const logIn = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: true
            }
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                </ul>
            </div>

            {
                globalState.loggedIn === false &&
                <button onClick={logIn} className="btn btn-primary">Log In</button>
            }

            {
                globalState.loggedIn === true &&
                <button onClick={logOut} className="btn btn-primary">Log Out</button>
            }

        </nav>
    )
}

export default Navigation;



