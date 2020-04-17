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
        if (this.state.suggested.length<=0)
        {
            axios({
                'method': 'GET',
                'url': `/domain/suggested?domain=${this.props.domain}&limit=15`,
                'ContentType':'application/json'
            }).then((response)=>{
                var arr = JSON.parse(response.data.data);
                console.log("response=>",arr)
                this.setState({
                    suggested:arr
                })
            }).catch(error=>{
                console.log(error);
            });
        }
    }

    componentWillUnmount()
    {
        this.setState({
            suggested:[]
        })
    }

    render() {
        if (this.state.suggested.length>0)
        {
        return (
            <div>
                <h5>Our Suggestions</h5>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Domain</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.suggested.map((element,index)=>(<tr key={index}><td>{element.domain}</td>
                    <td>{(element.price)?element.currency+" "+element.price:("Not for sale")}</td></tr>))}
                    </tbody>
                </table>
            </div>
        )
        }
        else
        {
            return ((<div>Loading Our Suggestions since this domain is not available ...</div>))
        }
    }
}

export default Suggested;