import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {

    constructor(props)
    {
        super(props);
        console.log(props)
    }

    onChangeHandler = (e) =>
    {
        axios({
            'method': 'GET',
            'url': `http://localhost:5000/domain/search?domain=${e.target.value}`,
            'ContentType':'application/json'
        }).then((response)=>{
            
            var obj = JSON.parse(response.data.data);
            this.props.setOutput(obj);
        }).catch(error=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col offset-s4 s4">
                        <h2>Find your domain Today</h2>
                        <i className="material-icons prefix">search</i>
                        <input id="search" type="text" className="validate" onChange={this.onChangeHandler}/>
                        <label htmlFor="search">Search For domain</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
