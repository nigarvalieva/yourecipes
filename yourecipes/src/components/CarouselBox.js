import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function CarouselBox() {
    return (
        <div>
            <Carousel className='mt-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg"
                        alt="photo3"
                    />
                    <Carousel.Caption>
                        <h3>18+  By a glass?</h3>
                        <p>Should you drink sparkling wine? Is it worth drinking at all?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/14460437/pexels-photo-14460437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="photo2"
                    />
                    <Carousel.Caption>
                        <h3>Food+Drinks=...</h3>
                        <p>The Best Food and Drink Pairings for 2023</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2175211/pexels-photo-2175211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="photo4"
                    />
                    <Carousel.Caption>
                        <h3>Poll Winners for 2023</h3>
                        <p>What dishes will meet with us in 2023, YOUR choice! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="photo5"
                    />
                    <Carousel.Caption>
                        <h3>New Year - New eating habits!</h3>
                        <p>What is NEEDED in the Year of the Black Rabbit...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
