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
  

  setOutput (outputData)
  {
    console.log("setting output value")
    
    this.setState({
      output:outputData
    })
  }

  render()
  {
    return (
      <div className="App">
        <Search setOutput={this.setOuput}/>
        <Output data={this.state.output}/>
      </div>
    );
  }
}

export default App;
