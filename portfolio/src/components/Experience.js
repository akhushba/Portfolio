import {Container, Row, Col, Card} from "react-bootstrap";

function Experience() {
    let items = [
        {
            title: 'AI Intern',
            subtitle: 'Quest, Islamabad, Pakistan',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum inventore eligendi ipsam eveniet corrupti! Sequi possimus sunt id. Repudiandae quidem accusantium, animi beatae distinctio ducimus eum dolorum labore cum? Architecto maiores quo eius sapiente? Nesciunt repudiandae, tempora dolore facilis laboriosam harum molestias accusamus? Porro commodi laboriosam neque, fugiat repellendus architecto inventore ut, fuga quidem maiores rem nam nihil. Sint?Porro commodi laboriosam neque.'
        },
        {
            title: 'Co-op Software Developer',
            subtitle: 'CCIA, Calgary, Canada',
            text: 'Worked in full-stack software plugin development for a nopCommerce e-commerce platform with ASP.NET, working with C#, .NET, HTML/CSS, and Javascript to a Microsoft SQL Server. Organized and created updated documentation on system configurations and plugin developments using Microsoft Office. Effieciently answered tickets for bugs found in recent developments and provide effective solutions. Self-directed efforts to modify company’s manual testing strategy by creating a new test plan template to increase efficiency'
        },
        {
            title: 'Co-Chapter Head',
            subtitle: 'STEM Fellowship, Calgary, Canada',
            text: 'Lead and hosted a hackathon, utilizing networking capabilities and organizing a team of seven executives to develop new STEM opportunities for sixty club members. Created structured webinars, purposeful online resources, and mentorship programs to help younger students understand industries in STEM. Exhibited a strong work ethic, and established a calm, disciplined, resourceful approach in the face of challenges to ensure proper time-management and efficient practices'
        },
        {
            title: 'STEM Tutor',
            subtitle: 'Self-Employed, Calgary, Canada',
            text: 'Lead and hosted a hackathon, utilizing networking capabilities and organizing a team of seven executives to develop new STEM opportunities for sixty club members. Created structured webinars, purposeful online resources, and mentorship programs to help younger students understand industries in STEM. Exhibited a strong work ethic, and established a calm, disciplined, resourceful approach in the face of challenges to ensure proper time-management and efficient practices'
        }
    ];

    return (
        <>
            <section className="experience" id="experience">
                <h2>Experience</h2>
                <Container>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{items[0].title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{items[0].subtitle}</Card.Subtitle>
                            <Card.Text>
                            {items[0].text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{items[1].title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{items[1].subtitle}</Card.Subtitle>
                            <Card.Text>
                            {items[1].text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{items[2].title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{items[2].subtitle}</Card.Subtitle>
                            <Card.Text>
                            {items[2].text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{items[3].title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{items[3].subtitle}</Card.Subtitle>
                            <Card.Text>
                            {items[3].text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    );
}

export default Experience;