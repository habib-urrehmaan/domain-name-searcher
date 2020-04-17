import React, { Component } from 'react'
import axios from 'axios'

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
            'url': `/domain/suggested?domain=${this.props.domain}&limit=10`,
            'ContentType':'application/json'
        }).then((response)=>{
            
            var arr = JSON.parse(response.data.domains);
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
                <table>
                    <tr>
                        <th>Domain</th>
                        <th>Availability</th>
                        <th>Price</th>
                    </tr>
                </table>
                <ul>
                    {this.state.suggested.map((element,index)=>(<li key={index}>{element.domain}</li>))}
                </ul>
            </div>
        )
    }
}

export default Suggested;