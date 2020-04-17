import React from 'react'

export default function Output(props) {

    let {data} = props;
    console.log("output data",data);
    return (
        <div className="row">
        {(data)?(<div className="col offset-s2 s2">{(data.available)?(<div><span>Congratulations! This domain is available</span><br/>
            <span><b>Price:</b>{data.price}{data.currency}</span></div>):(data.code)?(<div>{data.message}</div>):(<span>Sorry this domain is not Available</span>)}</div>)
            :(<div className="col offset-s4 s2">Start typing to search for domain</div>)}
             

        </div>
    )
}
