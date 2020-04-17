import React from 'react'
import Suggested from './Suggested';
import './Suggested.css';

export default function Output(props) {

    let {data} = props;
    
    return (
        <div className="row">
        {(data)?(<div className="col offset-s4">{
            (data.available)?(<div><span className="success">Congratulations! This domain is available</span><br/><span className="col offset-s4"><b>For:</b>{" "+data.currency+" "+data.price}</span></div>):
            (data.code)?(<div className="error">{data.message}</div>):(<div><Suggested domain={data.domain}/></div>)}</div>)
            :(<div className="col offset-s4">Start typing to search for domain</div>)}
        </div>
    )
}
