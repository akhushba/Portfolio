import Carousel from 'react-bootstrap/Carousel';
import picOne from './images/blueGreyGrad.jpg';
import picTwo from './images/blueGreyGrad0.jpg';
import picThree from './images/blueGreyGrad1.jpg';
import picFour from './images/blueGreyGrad2.jpg';

function Projects(){
    return (
        <>
        <section className="projects" id="projects">
        <h2 className="projects-title">Projects</h2>
        <div className="d-flex justify-content-center">
        <Carousel fade>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={picOne}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>Compiler</h3>
                <p>Created a compiler that turns a language, WLP4, into MIPS code, which is then turned into machine code. WLP4 has a similar syntax to C, but carries some restrictions. It may only have integers and integer pointers as variable types, but it is able to allocate memory on the stack as well as the heap, and does garbage removal as well.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={picThree}
            alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Autonomous Vacuum</h3>
                <p>Collaborated with a team of four and utilized C and an Arduino Uno R3 to build an autonomous vacuum. Tested thoroughly for smooth hardware-software integration to ensure reliable collision detection and garbage detection. Developed most efficient way to process vacuum's movements to conserve power usage to save batteries</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={picTwo}
            alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Interactive Online Bank</h3>
                <p>Created a virtual bank GUI with Java using OOP that serializes a user's account information, organizes past deposits and withdrawals, and allows the information to be viewed through a filtered list. It also provides financial advice after analyzing a user's income and spending habits. The interface was built using Eclipse's WindowBuilder.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={picFour}
            alt="Fourth slide"
            />
            <Carousel.Caption>
                <h3>Ping Pong</h3>
                <p>Created a multiplayer ping pong game in Python using Object-Based Programming and Pygame. The ping pong game has graphics akin to a regular arcade game, but players are able to receive powerups after accumulating certain levels of points. Using the powerups come to the advantage of the player as it can impede the other's performance.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </section>
        </>
    );
}

export default Projects;