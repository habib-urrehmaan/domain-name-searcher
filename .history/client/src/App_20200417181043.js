import React from 'react';
import Search from './Search';
import Output from './Output';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state ={
      output:null
    }
  }
  

  setAppOutput = (outputData) =>
  {
    console.log("setting output value")
    
    this.setState({
      output:outputData
    })
  }

  render()
  {
    return (
      <>
      <div className="App container">
        <h1>Search For Domain</h1>
        <Search setOutput={this.setAppOutput}/>
        <Output data={this.state.output}/>
      </div>
      </>
    );
  }
}

export default App;
