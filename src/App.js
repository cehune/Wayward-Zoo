import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {

        allInfo: [],
        Name: "Nothing",
        Image: [],
        Number: []
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
        this.setState({ 
          allInfo: data,
        })
    }

    /*Essentially the api information is a massive object split with 700+ different objects containing arrays for each fish species. 
    I'm just finding a random number in that object length to get the random fish for our user. The returned variable, choice, gives us 
    all of the information for a certain type of fish. 
    
    I had a bit of confusion here because I thought choice was giving us an index rather than a full array value. */

    randomChoice() {
      const newLocal = this.state.allInfo;
      const choice = newLocal[Math.floor(Math.random()*newLocal.length)];
      return choice;
    }
    
    /*This sets the state for each specific key value pair using the information given by th api. It takes the randomly generated 
    array object and uses it's key value pairs. 
    
    My main issue here was that I forgot to add the brackets after call to randomChoice, and some confusion for how to access 
    the key-value pairs. What helped a lot was to isolate an array object from the api, which was compiled and disorganized. 
    VSC's auto organizer was extremely helpful, as I could immediately visualize the object. */

    handleClick() {
      const newLocal = this.state.allInfo;
      this.setState({
        Name: this.randomChoice()["Species Name"],
      })
    }

    

    render() {
        return (
            <div>
                <h1>Random Fish Info Generator</h1>
                <Button onClick = {this.handleClick}>
        </Button>
        <h2 id='name'>hi{this.state.Name}</h2>
        
        
            </div>
        )
    }
  }


  export default App;
  ReactDOM.render(<App />, document.getElementById('app'));
  //<img id='image'src={this.state.Image}></img>

  /*Note for future reference, rubber ducking is an incredible tactic for debugging. */