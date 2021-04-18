import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component{

    render(){
        console.log(this.props.weatherData)
        console.log(this.props.movieData)

        let allWeatherListGroups = this.props.weatherData.map((day,index)=>(
            <ListGroup.Item key={index}>{`${day.date}: ${day.description}`}</ListGroup.Item>
        ))
        let allMovieListGroups = this.props.movieData.map((movie,index)=>(
            <ListGroup.Item key={index}>{movie.title}</ListGroup.Item>
        ))
        return(
            <>
            <ListGroup>{allWeatherListGroups}</ListGroup>
            <ListGroup>{allMovieListGroups}</ListGroup>
            </>
        )
    }
}

export default Weather;