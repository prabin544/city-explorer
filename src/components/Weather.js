import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import Movie from './Movie';

class Weather extends React.Component{

    render(){
        console.log(this.props.weatherData)
        console.log(this.props.movieData)

        let allWeatherListGroups = this.props.weatherData.map((day,index)=>(
            <ListGroup.Item key={index}>{`${day.date}: ${day.description}`}</ListGroup.Item>
        ))
        let allMovie = this.props.movieData
        return(
            <>
                <ListGroup>{allWeatherListGroups}</ListGroup>
                <CardColumns>
                    {allMovie.map((movie, index) => {
                        return (
                            <Movie
                                title={movie.title}
                                overview={movie.overview}
                                average_votes={movie.average_votes}
                                total_votes={movie.total_votes}
                                image_url={movie.image_url}
                                popularity={movie.popularity}
                                released_on={movie.released_on}
                            />
                        );
                    })}
                </CardColumns>
            </>

        )
    }
}

export default Weather;