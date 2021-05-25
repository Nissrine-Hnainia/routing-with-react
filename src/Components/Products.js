import React from 'react';
import {Link, Route} from 'react-router-dom'

const Products = ({match}) => {
    console.log(match)
    return (
        <div>
            <h1>Welcome to products page</h1>
            <ul>
                <li><Link to={`${match.url}/computers`}>Computers</Link></li>
                <li><Link to={`${match.url}/books`}>Books</Link></li>
            </ul>
            <Route path={`${match.path}/:x`} render={({match}) => <h2>This is the {match.params.x} page</h2>}/>
        </div>
    )
}

export default Products
