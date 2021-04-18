import React from 'react'

import Errorpage from './components/ErrorPage';
import Weather from './components/Weather'
import Container from 'react-bootstrap/Container';
import SearchForm from './components/SearchForm';
import axios from 'axios'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      citySearchedFor: '',
      lat: '',
      lon: '',
      weatherData: [],
      movieData: [],
    };
  }

  handleSearch = async(citySearchedFor) => {
    console.log(citySearchedFor);

    try{
      let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearchedFor}&format=json`);
      console.log(locationResponseData)
      this.setState({
        citySearchedFor: locationResponseData.data[0].display_name,
        lat: locationResponseData.data[0].lat,
        lon: locationResponseData.data[0].lon,
      });
      this.getWeatherData()
      this.getMovieData()
      
    } catch(err){
      console.log(err);
      this.setState({error: err.message})
    }
    
  }

  getWeatherData = async() =>{
    try{
       //let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`);
      let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`,{
        params:{
          lat: this.state.lat,
          lon: this.state.lon
        }
      });
      console.log(weatherData);
      this.setState({
        weatherData: weatherData.data
      });
    } catch(err){
      console.log(err.message);
      this.setState({error: err.message})
    }
    
  }

  getMovieData = async() =>{
    try{
       //let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`);
      let movieData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`,{
        params:{
          citySearchedFor: this.state.citySearchedFor.replace(/\W.*/,''),
        }
      });
      console.log(movieData);
      this.setState({
        movieData: movieData.data
      });
    } catch(err){
      console.log(err.message);
      this.setState({error: err.message})
    }
    
  }

  render (){
    return (

        <Container>
          {this.state.error ? <Errorpage error={this.state.error} /> : 
          (
            <>
            <SearchForm handleSearch={this.handleSearch}/>
            <h4>{this.state.citySearchedFor}</h4>
            <h6>{this.state.lat}</h6>
            <h6>{this.state.lon}</h6>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=10`} alt="map of city" />
            <Weather weatherData={this.state.weatherData} movieData={this.state.movieData}/>
            </>
          )  
        }
        </Container>
    )
  }
} 

export default App;
