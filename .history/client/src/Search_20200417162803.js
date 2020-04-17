import React, { Component } from 'react'
// import axios from 'axios'
import curl from 'curl'

class Search extends Component {

    onChangeHandler(e)
    {
        axios({
            'method': 'GET',
            'url': `http://localhost:5000/domain/search?domain=${e.target.value}`,
            'ContentType':'application/json'
        }).then((response)=>{
            console.log("response=",response);
        }).catch(error=>{
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s6">
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
