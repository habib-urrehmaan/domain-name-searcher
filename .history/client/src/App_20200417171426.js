import React from 'react';
import Search from './Search';
import Output from './Output';
import axios from 'axios'

class App extends React.Component {

  state = {
    output:null
  }

  setOutput = (outputData)=>
  {
    console.log("setting output value")

    axios({
      'method': 'GET',
      'url': `http://localhost:5000/domain/search?domain=${e.target.value}`,
      'ContentType':'application/json'
    }).then((response)=>{
        console.log("response=",response);
        this.setState({
          output:outputData
        })
    }).catch(error=>{
        console.log(error);
    });
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
