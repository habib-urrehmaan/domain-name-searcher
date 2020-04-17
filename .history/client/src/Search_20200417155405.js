import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {

    onChangeHandler(e)
    {
        axios({
            'method': 'GET',
            'url': 'https://api.ote-godaddy.com/v1/domains/available?domain=example.guru',
            'headers':{
                "Authorization":"sso-key 3mM44UahEtzJYM_A9G1FR37syih86cQQ63xpu:WSB3CmqN554F8aPhHTuRMi"
            }
        }).then((response)=>{
            console.log("response=",response);
        }).catch(error=>{
            console.log(error);
        })
        // console.log(e.target.value)
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
