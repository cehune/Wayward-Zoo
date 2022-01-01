import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button';
const url = 'https://www.fishwatch.gov/api/species'


class Random extends React.Component(){
    constructor(props){
      super(props);
      this.state = {
        Name: [],
        Image Gallery: [],
        Physical
      }
  
    }

    //fetch request for the url
    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch(url);
        const data = await response.json();
        this.setState({})
    }
    
    
    render() {
        return (
            <div>
                <h1>Random Fish Info Generator</h1>

            </div>
        )
    }
  }