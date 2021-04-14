import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import error from '../assets/400.jpeg'

class Errorpage extends React.Component{
    render(){
        console.log(this.props)
        return(
            <Container style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Jumbotron>
                    <img src={error} alt="Responsive img"  />
                </Jumbotron>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Spinner animation="border" variant="danger"  />
                        <Spinner animation="border" variant="danger"  />
                        <Spinner animation="border" variant="danger"  />
                        <Spinner animation="border" variant="danger"  />
                        <Spinner animation="border" variant="danger"  />
                        <Spinner animation="border" variant="danger"  />
                        <h4>Seems like you encountered Error 🤔🤔🤔</h4>
                        <h4>{this.props.error} 🤔🤔🤔</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Errorpage;