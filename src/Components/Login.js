import React, {useState} from 'react'
import { Redirect } from 'react-router';

const Login = ({authentication, location}) => {

    const [redirection, setRedirection] = useState(false)
    const handleLog = () => {
        setRedirection(true);
        authentication(true)
    }
    const {from} =location.state
    if (redirection) {
        return <Redirect to={from.pathname}/>
    }
    return (
        <div>
            <p>Please login first</p>
            <button onClick={handleLog}>login</button>
        </div>
    )
}

export default Login
