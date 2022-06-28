import './App.css';
import React from "react"
class App extends React.Component{
    constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  handleDecrease = (e) => {
     this.setState({counter: this.state.counter - 1 })
    
  }
  
  handleReset = () => {
   this.setState({counter: 0} )
   
  }
  handleIncrease = () => {
     this.setState({counter: this.state.counter + 1})
  }

  render(){
    const {counter} = this.state
    return(
      <div className='App'>
          <h1>Counter</h1>
          <p className= { counter > -1 ? "green" : "red" }>
           {counter}
           </p>
           <button  onClick={this.handleDecrease}>Decrease</button>
           <button  className='black'  onClick={this.handleReset}>Reset</button>
           <button  onClick={this.handleIncrease}>Increase</button>
      </div>
    )
  }
}

export default App;
