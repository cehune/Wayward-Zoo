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
          /* I'm putting all of the key value pairs I deem important into the initial state. 
              I'm also putting in all of the info gathered from the api so I can access it throughout the entire file. 
              I was running into issues earlier with scope, and thought this would work as a solution. */

      }
      this.handleClick = this.handleClick.bind(this); //binding it 
    }

    //fetch request for the url
    
    async componentDidMount() {
        // GET request using fetch with async/await. There is no api key requiered. 
        const response = await fetch('https://enigmatic-beach-52405.herokuapp.com/https://www.fishwatch.gov/api/species');
        const data = await response.json();
        this.setState({ allInfo: data })
    }
    
    


    /*Essentially the api information is a massive object split with 700+ different objects containing arrays for each fish species. 
    I'm just finding a random number in that object length to get the random fish for our user. */
    randomChoice() {
      const newLocal = this.state.allInfo;
      const choice = newLocal[Math.floor(Math.random()*Object.keys(newLocal).length)];
      return choice;
    }
    
    handleClick() {
      const newLocal = this.state.allInfo;
      //const index = this.randomChoice;
      this.setState({
        Name: newLocal[this.randomChoice()]["Species Name"],
        Image: newLocal[this.randomChoice()]["Image Gallaery"][0]
      })
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