import React from 'react'
import { Button } from 'react-bootstrap'

const AudioBooks = ({history}) => {
    return (
        <div>
            <h2>This is the audio books page</h2>
            <Button onClick={() => history.goBack()}>go back</Button>
            <Button onClick={() => history.goForward()}>go forward</Button>
        </div>
    )
}

export default AudioBooks
