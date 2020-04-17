import React, { Component } from 'react'


class Search extends Component {

    constructor(props)
    {
        super(props);
    }

    // onChangeHandler = (e) =>
    // {
        
    // }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">search</i>
                        <input id="search" type="text" className="validate" onChange={this.props.setOuput}/>
                        <label htmlFor="search">Search For domain</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
