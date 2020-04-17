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
            
            var arr = JSON.parse(response.data.data);
            
            this.setState({
                suggested:arr.domains
            })
        }).catch(error=>{
            console.log(error);
        });
    }

    componentWillUnmount()
    {
        this.setState({
            suggested:[]
        })
    }

    render() {
        return (
            <div>
                <h5>Our Suggestions</h5>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Domain</th>
                            <th>Availability</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {(this.state.suggested.length>0)?this.state.suggested.map((element,index)=>(<tr key={index}><td>{element.domain}</td>
                    <td>{element.available}</td><td>{element.currency+" "+element.price}</td></tr>)):(<tr>Loading ...</tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Suggested;