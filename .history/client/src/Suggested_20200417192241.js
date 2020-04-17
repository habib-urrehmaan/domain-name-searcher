import React, { Component } from 'react'
import axios from 'axios'
import config from './config'

class Suggested extends Component {

    constructor(props)
    {
        super(props);
        this.state= {
            suggested:[]
        }
    }

    componentWillMount()
    {
        axios({
            'method': 'GET',
            'url': `${config.domain_name}/domain/suggested?domain=${this.props.domain}&limit=10`,
            'ContentType':'application/json'
        }).then((response)=>{
            
            var arr = response.data;
            console.log("arr=",arr);
            this.setState({
                suggested:arr
            })
        }).catch(error=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h5>Our Suggestions</h5>
                <ul>
                    {this.state.suggested.map((element,index)=>(<li key={index}>{element.domain}</li>))}
                </ul>
            </div>
        )
    }
}

export default Suggested;