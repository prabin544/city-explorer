import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Movie extends React.Component{

    render(){
        return(
            <Card >
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>Title: {this.props.title}</Card.Title>
                    <Card.Text>Overview: {this.props.overview}</Card.Text>
                    <Card.Text>Avg Votes: {this.props.average_votes}</Card.Text>
                    <Card.Text>Total Votes: {this.props.total_votes}</Card.Text>
                    <Card.Text>Popularity: {this.props.popularity}</Card.Text>
                    <Card.Text>Released on: {this.props.released_on}</Card.Text>
                </Card.Body>
            </Card>
   
        )
    }
}

export default Movie;