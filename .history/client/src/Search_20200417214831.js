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
            'url': `/domain/search?domain=${e.target.value}`,
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
                    <div className="col offset-s3">
                        <h4>Find your favorite domain <b>Today</b>!</h4>
                    </div>
                    <div className="input-field col s7 offset-s2">
                        <i className="material-icons prefix">search</i>
                        <input id="search" type="text" className="validate" onChange={this.onChangeHandler}/>
                        <label htmlFor="search">Start Searching</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
