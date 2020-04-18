import React from 'react'
import Suggested from './Suggested';
import './Output.css';

export default function Output(props) {

    let {data} = props;
    console.log("data=",data);
    return (
        <div className="row">
        {(data)?(<div className="col offset-s4">{
            (data.available)?(<div><span className="success">Congratulations! This domain is available</span><br/><span className="col offset-s4"><b>For:</b>{" "+data.currency+" "+data.price}</span></div>):
            (data.code)?(<div className="error">{data.code}</div>):(<div><Suggested domain={data.domain}/></div>)}</div>)
            :(<div className="col offset-s4 info">Start typing to search for domain</div>)}
        </div>
    )
}
