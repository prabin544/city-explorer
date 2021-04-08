import React from 'react'

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
      lon: ''
    };
  }

  handleSearch = async(citySearchedFor) => {
    console.log(citySearchedFor);

    // make request to LocationIQ
    let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearchedFor}&format=json`);
    console.log(locationResponseData);
    this.setState({
      citySearchedFor: locationResponseData.data[0].display_name,
      lat: locationResponseData.data[0].lat,
      lon: locationResponseData.data[0].lon,
    });
  }

  render (){
    return (
      <Container>
        <SearchForm handleSearch={this.handleSearch}/>
        <h4>{this.state.citySearchedFor}</h4>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=10`} alt="map of city" />
      </Container>
    )
  }
} 

export default App;
