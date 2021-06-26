import React from 'react'
import { Button } from 'react-bootstrap'

const Books = ({history}) => {
    return (
        <div>
            <h2>This is the books page</h2>
            <Button onClick={() => history.goBack()}>go back</Button>
        </div>
    )
}

export default Books
