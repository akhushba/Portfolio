import {Container, Row, Col} from "react-bootstrap";
import coder from './images/coding.png';
import { useState } from "react";

function Banner() {

    const [activeTag, setActiveTag] = useState("");

    return (
        <>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span 
                            className={'tagline ' + activeTag}
                            onMouseEnter={() => {
                                setActiveTag("tagline-active"); 
                            }}
                            onMouseLeave={() => {
                                setActiveTag(""); 
                            }}>
                                Welcome to My Portfolio
                            </span>
                            <h1 className="introduction">Hi, I'm Amna</h1>
                            <p className="about" id="aboutMe">
                                I’m a second-year software engineering student who's looking for ways to further my technical skills, diversify my current skill set, and create meaningful connections with those around me. I enjoy tackling new challenges just as I would with a box of puzzles and hope to create a positive impact with my work.
                            </p>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={coder} alt="About Me" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Banner;