import React, {Component} from 'react';
import '../styles/landing.scss';
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';

import ScrollAnimation from 'react-animate-on-scroll';
import {Reveal, Slide, Fade} from 'react-reveal';

class Landing extends Component{
  constructor(props) {
    super(props);
    this.state = { 
        width: 0, 
        height: 0, 
        url: ""
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('load', this.updateWindowDimensions);

    document.body.classList.add('js-loading');
    setTimeout(function(){
        document.body.classList.remove('js-loading')
    }, 500);
}

componentWillUnmount() {
    window.removeEventListener('load', this.updateWindowDimensions);
}

updateWindowDimensions() {
    let modifiedHeight = window.innerHeight;
    this.setState({ 
        width: window.innerWidth, 
        height: modifiedHeight,
        url: "url(https://source.unsplash.com/y9np19Fprmo/" + window.innerWidth + "x" + modifiedHeight +")"});
}

render() {
return (
    <Layout>
        <Row className="jumbotop"  style={{paddingBottom: '', backgroundColor: `darkseagreen`}}>
            <Col className="p-0">
                <Jumbotron className="d-flex justify-content-center align-items-center" fluid style={{
											minHeight: window.innerHeight, height: this.state.height, 
											backgroundImage: this.state.url,
											backgroundRepeat: `no-repeat`, backgroundSize: `cover`, 
											backgroundColor: `gray`, margin: `0px`}}>

                    <Container  className="" style={{}}>
                        <Fade right>
                            <h1 className="display-1" style={{ color: `white`}}>Sample Title Name</h1>
                        </Fade>
                        <Fade left>
                            <p className="h5" style={{fontFamily: 'Montserrat, sans-serif', color: `white`}}>
                            Experts in Something Complex and Dynamic
                            </p>
                        </Fade>
					</Container>
					
					{/* <div class="animtext display-1">
						<svg viewBox="0 0 1618 216" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" fill="none" fill-opacity="0">
								<text id="" stroke="#fff" fill="none" font-weight="normal" font-family='Montserrat, sans-serif'>
									<tspan x="3" y="109">
										<tspan>N</tspan>
										<tspan>a</tspan>
										<tspan>m</tspan>
										<tspan>e</tspan>
										<tspan>l</tspan>
										<tspan>e</tspan>
										<tspan>s</tspan>
										<tspan>s</tspan>
										<tspan> </tspan>
										<tspan>O</tspan>
										<tspan>r</tspan>
										<tspan>i</tspan>
										<tspan>g</tspan>
										<tspan>i</tspan>
										<tspan>n</tspan>
									</tspan>
								</text>
							</g>
						</svg>
					</div> */}
                </Jumbotron>
            </Col>
        </Row>
        
		<Row style={{paddingTop: '0em', backgroundColor: `#9da494`}}><Col className="">
        <ScrollAnimation animateIn="has-animation animate-in" animateOnce="true" animatePreScroll="false">

        <Row className="d-flex justify-content-md-center" style={{textAlign: `center`, paddingTop: '6em', paddingBottom: '8em', backgroundColor: `#9da494`}}> 
            <Col md={6}>
                <Card style={{width: '100%', textAlign: "center", border: "none", backgroundColor: `#9da494`}}>
                    <Card.Body>
						<Card.Title className=""><h2 className="display-4">Core Text</h2></Card.Title>
						<Card.Subtitle className="mt-4 mb-2 text-muted">San Diego Software Company</Card.Subtitle>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content. Some quick example text to build on the card title and make up the bulk of
						</Card.Text>  
                    </Card.Body>
                </Card>

                <Row className='align-items-top' style={{paddingTop: `2em`, backgroundColor: `#9da494`}}>
                        <Col className="d-flex justify-content-center" >
                            <Card style={{ border: "none", backgroundColor: `#9da494`}}>
                                <Card.Body>
                                    <Image className="p-3" src="https://source.unsplash.com/random/80x80" roundedCircle/>
                                    <Card.Title as="h4">Open Source</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="d-flex justify-content-center">
                            <Card style={{ border: "none", backgroundColor: `#9da494`}}>
                                <Card.Body>
                                    <Image className="p-3" src="https://source.unsplash.com/random/80x81" roundedCircle/>
                                    <Card.Title as="h4">Technical Excellence</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="d-flex justify-content-center">
                            <Card style={{border: "none", backgroundColor: `#9da494` }}>
                                <Card.Body>
                                    <Image className="p-3" src="https://source.unsplash.com/random/79x80" roundedCircle/>
                                    <Card.Title as="h4">Focused Solutions</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
						
                </Row>
            </Col>
        </Row>

        </ScrollAnimation>
		</Col></Row>

		<Row className="d-flex justify-content-md-center" 
			style={{textAlign: `center`, paddingTop: '6em', paddingBottom: '6em', backgroundColor: ``}}>
			<Col md={4}>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x180" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x181" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x182" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x183" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x184" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>
			
			</Col>

			<Col md={4}>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x180" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x181" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x182" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x183" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>

				<Fade bottom>
				<Card className="hovercard bg-dark text-white mt-2" style={{border: '0.5em solid #9da494',}}>
					<Card.Img className="nothoverimage" src="https://source.unsplash.com/random/600x184" alt="Card image" />
					
					<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
						<Card.Title className="nothovertext"><h3 className="display-3">Card title</h3></Card.Title>
						<Card.Text className="hovertext">
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				</Fade>
			
			</Col>
		</Row>

        <div class="row align-items-top justify-content-md-center" style={{textAlign: `center`, paddingTop: `2em`}}>
            <div class="col-sm-8">

                <Row className="" style={{marginTop: `4em` }}>
                    <Col>
                        <Card className="text-left">
							{/* <ScrollAnimation animateIn="has-animation animate-in" animateOnce="true" duration="3"> */}	
                            	<Card.Header>
									<Fade right>
										<h3 className="">Projects</h3>
									</Fade>
								</Card.Header>					
                            {/* </ScrollAnimation> */}

                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>

                                <Fade right> 

                                    <Row className="" style={{ marginTop: '3em' }}>
                                        <Col className="">
                                            <Card className="hovercard bg-dark text-white">
                                                <Card.Img className="nothoverimage" src="https://source.unsplash.com/random/1104x170" alt="Card image" />
                                                
												<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                                    <Card.Title className="nothovertext"><h3 className="display-4">Card title</h3></Card.Title>
                                                    <Card.Text className="hovertext">
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                                    </Card.Text>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </Col>
                                    </Row>
                                
                                    <Row style={{ marginTop: '3em' }}>
                                        <Col className="">
                                            <Card className="hovercard bg-dark text-white">
                                                <Card.Img className="nothoverimage" src="https://source.unsplash.com/random/1104x169" alt="Card image" />
                                                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                                    <Card.Title className="nothovertext"><h3 className="display-4">Card title</h3></Card.Title>
                                                    <Card.Text className="hovertext">
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                                    </Card.Text>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '3em' }}>
                                        <Col className="">
                                            <Card className="hovercard bg-dark text-white">
                                                <Card.Img className="nothoverimage"src="https://source.unsplash.com/random/1104x171" alt="Card image" />
												<Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                                    <Card.Title className="nothovertext"><h3 className="display-4">Card title</h3></Card.Title>
                                                    <Card.Text className="hovertext">
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                                    </Card.Text>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </Col>
                                    </Row>

                                </Fade> 

                            </Card.Body>
                        </Card>               
                    </Col>
                </Row>
            </div>
        </div>

		
        <div class="row align-items-top justify-content-md-center" style={{textAlign: `center`, minHeight: `300px`, paddingTop: `10em`, paddingBottom: `10em`}}>
            <div class="col-sm-6">
                <h3>Technologies</h3>

				
                <div style={{textAlign: `center`, marginTop: `2em`}}>
				<Fade bottom>
                    <Row className="">
                        <Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/143x141" roundedCircle/>
                        </Col>
                        <Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/143x142" roundedCircle/>
                        </Col>
                        <Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/143x143" roundedCircle/>
                        </Col>
                        <Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/143x144" roundedCircle/>
                        </Col>
                    </Row>
                

                    <Row className="" style={{ marginTop: '2rem' }}>
						<Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/141x143" roundedCircle/>
                        </Col>
                        <Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/142x143" roundedCircle/>
                        </Col>
                        <Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/143x145" roundedCircle/>
                        </Col>
                        <Col className="mt-4">
                            <Image src="https://source.unsplash.com/random/144x143" roundedCircle/>
                        </Col>
                    </Row>
					</Fade>
                </div>
            </div>
        </div>
		

    </Layout>
)}
}

export default Landing;
