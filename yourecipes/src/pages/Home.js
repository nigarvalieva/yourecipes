import React from 'react'
import CarouselBox from '../components/CarouselBox';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import Meal from '../components/Meal';

export default function Home() {
    return (
        <>
            <Container>
                <Meal />
                <CardGroup className="mt-3">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>SALADS</Card.Title>
                            <Card.Text>37 Best Salad Recipes</Card.Text>
                            <a href="https://www.loveandlemons.com/salad-recipes/" target="_blank" rel="noreferrer">
                                <Button variant="danger">Click here</Button>
                            </a>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3832330/pexels-photo-3832330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>SOUPS</Card.Title>
                            <Card.Text>30 Best Soup Recipes</Card.Text>
                            <a href="https://themodernproper.com/30-best-soup-recipes" target="_blank" rel="noreferrer">
                                <Button variant="danger">Click here</Button>
                            </a>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>SIDE</Card.Title>
                            <Card.Text>Top 50 side dishes</Card.Text>
                            <a href="https://www.taste.com.au/recipes/collections/top-50-side-dishes" target="_blank" rel="noreferrer">
                                <Button variant="danger">Click here</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <CarouselBox />
        </>
    )
}