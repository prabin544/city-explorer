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
      weatherData: []
    };
  }

  handleSearch = async(citySearchedFor) => {
    console.log(citySearchedFor);

    try{
      let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.361a189ca163d3805d8ac778efeb4803&q=${citySearchedFor}&format=json`);
      this.setState({
        citySearchedFor: locationResponseData.data[0].display_name,
        lat: locationResponseData.data[0].lat,
        lon: locationResponseData.data[0].lon,
      });
      this.getWeatherData()
      
    } catch(err){
      console.log(err);
      this.setState({error: err.message})
    }
    
  }

  getWeatherData = async() =>{
    try{
       let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`);
      //let weatherData = await axios.get('http://localhost:3001/weather',{
        // params:{
        //   lat: this.state.lat,
        //   lon: this.state.lon
        // }
      //});
      console.log(weatherData);
      this.setState({
        weatherData: weatherData.data
      });
    } catch(err){
      console.log(err.message);
      this.setState({error: err.message})
    }
    
  }

  render (){
    console.log(this.state.weatherData)
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
            <Weather weatherData={this.state.weatherData}/>
            </>
          )  
        }
        </Container>
    )
  }
} 

export default App;
