import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button';



class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {

        allInfo: [],
        Name: [],
        Image: []
      }
  
    }

    //fetch request for the url
    
    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://enigmatic-beach-52405.herokuapp.com/https://www.fishwatch.gov/api/species');
        const data = await response.json();
        this.setState({ allInfo: data.total })
    }

    randomChoice() {
      const choice = this.state.allInfo[Math.floor(Math.random()*Object.keys(allInfo).length)];
    }
    
    
    render() {
        return (
            <div>
                <h1>Random Fish Info Generator</h1>
                <Button onClick = {this.handleClick}>
        </Button>
        <h2>{this.state.Name}</h2>
        <img src={this.state.Image}></img>
            </div>
        )
    }
  }


  export default App;
  ReactDOM.render(<App />, document.getElementById('app'));