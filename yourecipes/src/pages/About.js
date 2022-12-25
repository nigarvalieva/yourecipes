import React from 'react'
import { Tab, Container, Nav, Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <>
            <Container>
                <Tab.Container id="left-tab-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" bg="danger" className="flex-column mt-5">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="pill-color mt-2">Team</Nav.Link>
                                    <Nav.Link eventKey="second" className="pill-color mt-2">History</Nav.Link>
                                    <Nav.Link eventKey="third" className="pill-color mt-2">Magazines</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='tab-content'>
                                <Tab.Pane eventKey="first">
                                    <h3 className='mt-5'>
                                        You<span style={{ color: '#dc3545' }}>R</span>ecipes is always at home!
                                    </h3>
                                    <img className='about-team' src="https://panjosocial.com/wp-content/uploads/2019/03/about_team_img.png" alt='team' />
                                    <p>
                                        A common problem that stands in the way of creating your own culinary masterpiece is
                                        at home in the refrigerator there are not all those expensive and exotic products that
                                        required for any dish. No problem! Culinary site «You<span style={{ color: '#dc3545' }}>R</span>ecipes»
                                        offers an advanced search for recipes - just look in your refrigerator,
                                        see what is there and use a convenient search to find your dish of the day with exactly those
                                        products that are at home.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="history" src="https://cdni.iconscout.com/illustration/premium/thumb/indian-food-5863589-4874943.png" alt="history" />
                                    <p>
                                        The history of the emergence of culinary world dates back to antiquity, when a person first began to get food for himself. Since then, much has changed and cooking has become one of the art forms.
                                        <br />
                                        Cooking is a word derived from the Latin culina, which means cuisine. Its meaning is clear to everyone, it is the art of preparing delicious, healthy and satisfying dishes.
                                        <br />
                                        This has been studied for many years in special educational institutions, and individual, especially talented chefs are famous all over the world.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="tab-magazines">
                                    <div className='magazines'>
                                        <a href="https://fontsinuse.com/uses/21698/food-magazine" target='_blank' rel="noreferrer">
                                            <img className='magazine'
                                                src="https://assets.fontsinuse.com/static/use-media-items/73/72911/full-906x1240/5bad114e/1508830823_8d9sW58b.jpeg"
                                                alt="magazine-1" />
                                        </a>
                                        <a href='https://fontsinuse.com/uses/21698/food-magazine' target='_blank' rel="noreferrer">
                                            <img className='magazine'
                                                src="https://assets.fontsinuse.com/static/use-media-items/73/72915/full-1034x1412/5ba41896/1508490833_Ai49VsPq.jpeg"
                                                alt="magazine-2" />
                                        </a>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}