import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {

    onChangeHandler(e)
    {
        // axios({
        //     'method': 'GET',
        //     'url': 'https://api.dev.name.com/v4/hello',
        //     'auth':{
        //         'username':'habiburrehman-test',
        //         'password':'ac349cc378e39c46b89c78bfb2125c052b4bd9a4'
        //     }
        // }).then((response)=>{
        //     console.log("response=",response);
        // }).catch(error=>{
        //     console.log(error);
        // })
        console.log(e.target.value)
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
