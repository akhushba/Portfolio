import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

function Skills(){

    let items = [
        {
            title: 'first',
            list: ['Python', 'Java', 'C', 'C++', 'C#', 'HTML', 'CSS', 'Javascript', 'SQL']
        },
        {
            title: 'second',
            list: ['React.js', 'Pygame', 'Bootstrap', 'ASP.Net MVC', 'Git', 'jQuery', 'Unix']
        },
        {
            title: 'third',
            list: ['Microsoft SQL Server', 'Microsoft Office', 'Linux']
        }
    ];

    return(
        <>
            <section className="skills" id="skills">
                <Container>
                    <Row>
                        <Col>
                        <h2>Skills</h2>
                        <Tab.Container id="skill-tabs" defaultActiveKey="first"> 
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Programming Languages</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tools and Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Other</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="skills-panes d-flex justify-content-center">
                            <Tab.Pane eventKey="first">
                                <Row>
                                <ul className="list-group">
                                    {items[0].list.map((item, index) => (
                                    <li 
                                        className="list-group-item"
                                        key={index} 
                                    >
                                        {item} 
                                    </li>
                                    ))}
                                </ul>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                <ul className="list-group">
                                    {items[1].list.map((item, index) => (
                                    <li 
                                        className="list-group-item"
                                        key={index} 
                                    >
                                        {item} 
                                    </li>
                                    ))}
                                </ul>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                <ul className="list-group">
                                    {items[2].list.map((item, index) => (
                                    <li 
                                        className="list-group-item"
                                        key={index} 
                                    >
                                        {item} 
                                    </li>
                                    ))}
                                </ul>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Skills;