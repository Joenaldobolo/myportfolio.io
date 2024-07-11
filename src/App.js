import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Card, Image } from 'react-bootstrap';
import './App.css';
import image1 from './images/profile.jpg';
import stack1 from './images/bootstrap.png';
import stack2 from './images/html5.png';
import stack3 from './images/css.png';
import stack4 from './images/js.png';
import stack5 from './images/react.png';
import stack6 from './images/php.png';
import project from './images/web.png';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);

    
  };

  return (
    <div className="App" id="home">
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
            <Navbar.Brand className='fw-bold'>Joenaldo Bolo / IT Graduate</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-lg-auto">
                <Nav.Link className={`text-center ${activeLink === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleSetActiveLink('home')}>Home</Nav.Link>
                <Nav.Link className={`text-center ${activeLink === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleSetActiveLink('about')}>About</Nav.Link>
                <Nav.Link className={`text-center ${activeLink === 'projects' ? 'active' : ''}`} href="#projects" onClick={() => handleSetActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link className={`text-center ${activeLink === 'experience' ? 'active' : ''}`} href="#experience" onClick={() => handleSetActiveLink('experience')}>Experience</Nav.Link>
                <Nav.Link className={`text-center ${activeLink === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => handleSetActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container className="content" id='content'>
            <section id='home'>
            <Row lg={2} xs={1} className="section mt-lg-5 p-0 g-0">
                <Col className='order-2 order-lg-1 d-flex align-items-center'>
                    <Card className='zero border-0 bg-transparent'>
                    <Card.Body>
                            <div className='mt-lg-5 pt-lg-5'>
                                <Card.Title className='fs-1 fw-bold text-center text-lg-start'>Hello,</Card.Title>
                                <Card.Title className='fs-1 fw-bold text-center text-lg-start'>I'm Joenaldo Bolo</Card.Title>
                                <Card.Text className='text-justify mt-lg-4 fs-4'>
                                I recently completed my studies at Central Philippines State University, graduating with a degree in Information Technology.
                                </Card.Text>
                                <Row className='d-flex justify-content-center'>
                                    <Col><Nav.Link className='m-auto m-lg-1 text-center border rounded-pill w-75 border-primary text-primary btn-nav py-2' href="#contact">Contact Me</Nav.Link></Col>
                                    <Col><Nav.Link className='m-auto m-lg-1 text-center border rounded-pill w-75 border-primary text-primary btn-nav py-2' href="#projects">Project</Nav.Link></Col>
                                </Row>
                            </div>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className='order-1 mt-lg-5 h-50 order-lg-2'>
                    <Card className='zero bg-transparent border-0'>
                        <Card.Body className='ms-auto'>
                            <Image src={image1} alt='Image 1' fluid className='shadow-lg' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </section>

            <section id="about">
            <Row lg={1} id="about" className="section mt-5 mt-lg-0">
            <Col>
                <Card className="card-section mt-5 mt-lg-2">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-lg-start'>About Me</Card.Title>
                    <Card.Text className='p-lg-4 text-justify'>
                    I'm a passionate Information Technology professional recently graduated from Central Philippines State University. With a strong foundation in PHP, JavaScript, HTML, CSS, Bootstrap, and React, I am dedicated to creating innovative and user-friendly web applications. My journey in IT has equipped me with problem-solving skills and a keen eye for detail, ensuring robust and efficient solutions. Beyond coding, I enjoy staying updated with the latest tech trends and exploring new ways to enhance user experiences. Let's connect and build something great together!
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card-section mt-lg-5">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-lg-start'>Technology Stack</Card.Title>
                    <Card.Text className='p-lg-4 text-justify'>
                        <Row lg={6} xs={3} className='g-3'>
                            <Col>
                                <Card>
                                    <Image src={stack1} fluid alt='Bootstrap' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack2} fluid alt='HTML5' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack3} fluid alt='CSS' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack4} fluid alt='CSS' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack5} fluid alt='JS' />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={stack6} fluid alt='React' />
                                </Card>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>

            <section id="projects">
            <Row id="projects" className="section">
            <Col className='mt-5 mt-lg-1'>
                <Card className="shadow border-0">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-lg-start'>Project</Card.Title>
                    <Card.Text>
                        <Row lg={2} xs={1}>
                            <Col className='m-auto'>
                                <Card className='border-0 project m-auto'>
                                    <Card.Body className=' overlay-hidden'>
                                        <Image src={project} fluid alt='Project' className='scale-up' />
                                    </Card.Body>
                                    <a href='https://joenaldobolo.github.io/joenaldogithub.io/' target='_blank' rel='noreferrer' className='btn btn-outline-primary border-primary rounded-pill text-decoration-none'>Visit Website</a>
                                </Card>
                            </Col>
                            <Col className='m-auto'>
                                <Card className='border-0 project m-auto'>
                                    <Card.Body>
                                        <Card.Title className='text-center text-lg-start'>Jhones Cafe: A Taste of Happiness</Card.Title>
                                        <Card.Text className='text-justify'>
Welcome to Jhones Cafe, a delightful project that brings the warmth and joy of coffee culture to life. At Jhones Cafe, we believe that a cup of coffee shared with a friend is happiness tasted and time well spent. This website showcases our passion for creating cozy and inviting spaces where people can connect, relax, and savor the perfect brew. Explore our menu, learn about our story, and join us in celebrating the simple pleasures of good coffee and great company.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>
            <section id="experience">
            <Row id="experience" className="section">
            <Col>
                <Card className="card-section">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-lg-start'>Experience</Card.Title>
                    <Card.Text className='text-justify'>
                        <p> During my On-the-Job Training, I gained valuable insights into the operations of a professional environment and developed essential skills that complement my Information Technology studies at Central Philippines State University. My primary responsibility was data encoding, which involved accurate and efficient data entry and management.</p>
                        <br/>
                        <Card.Title className='fw-bold'>Key Responsibilities</Card.Title>
                        <ul>
                            <li>
                            <b>Data Encoding:</b> Efficiently encoded a large volume of data into company databases, ensuring accuracy and attention to detail. This included updating records, inputting new data, and maintaining data integrity.
                            </li>
                            <li>
                            <b>Data Management:</b> Organized and managed data files to ensure easy access and retrieval. Assisted in maintaining the database by regularly updating and verifying information.
                            </li>
                            <li>
                            <b>Documentation:</b> Assisted in creating and updating documentation for data entry procedures and standards. Ensured that all data entry tasks were well-documented for future reference.
                            </li>
                            <li>
                            <b>Collaboration:</b> Worked closely with other team members to ensure data consistency and accuracy. Participated in team meetings and provided input on improving data entry processes.
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>

            <section id="contact">
            <Row id="contact" className="section h-25">
            <Col>
                <Card className="border-0 shadow">
                <Card.Body>
                    <Card.Title className='fs-1 fw-bold text-center text-lg-start'>Contact Me</Card.Title>
                    <Card.Title className='fw-bold text-center text-lg-start hide-mobile'>Via:</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col className='m-auto text-center'>
                            <p>Facebook: <a href='https://web.facebook.com/joenaldo.bolo' rel='noreferrer' className='text-primary' target='_blank'>Facebook</a></p>
                            <p>Tiktok: <a href="https://www.tiktok.com/" rel='noreferrer' className='text-primary' target='_blank'>Tiktok</a></p>
                            </Col>
                            <Col className='m-auto text-center'>
                            <p>Instagram: <a href="https://www.instagram.com/" rel='noreferrer' className='text-primary' target='_blank'>Instagram</a></p>
                            <p>Github: <a href='https://github.com/Joenaldobolo' rel='noreferrer' className='text-primary' target='_blank'>Github</a></p>
                            </Col>
                            <Col className='m-auto text-center'>
                            <p>Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqkJMRsrbwptGxgjcXGStSrkZZTgHLpPXfngmSHlHqWqxCFnkfJPMBNjxXXgqFzKjzBCT" rel='noreferrer' className='text-primary' target='_blank'>joenaldobolo@gmail.com</a></p>
                            <p>Mobile No.: <a href='+63' rel='noreferrer' className='text-primary'>+639123456789</a></p>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </section>
        </Container>
    </div>
  );
}

export default App;
