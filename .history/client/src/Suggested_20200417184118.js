import React, { Component } from 'react'

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
            'url': `http://localhost:5000/domain/suggested`,
            'ContentType':'application/json'
        }).then((response)=>{
            
            var arr = JSON.parse(response.data.data);
            console.log("arr=",arr);
            // this.setState({
            //     suggested:arr
            // })
        }).catch(error=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h5>Our Suggestion</h5>
                <ul>
                    {}
                </ul>
            </div>
        )
    }
}

export default Suggested;