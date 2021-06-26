import React from 'react'
import {Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            This is the prodcuts page
            <div className="cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg" />
                <Card.Body>
                    <Card.Title>Books</Card.Title>
                    <Button variant="light">
                        <Link to="/products/books">See books</Link>
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="http://inclusivenews.org/uploads/posts/2016-09/1473701097_audio-books.jpg" />
                <Card.Body>
                    <Card.Title>Audio books</Card.Title>
                    <Button variant="light">
                        <Link to="/products/audio-books">See audio books</Link>
                    </Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Products
