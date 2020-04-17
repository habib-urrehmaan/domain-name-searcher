import React from 'react'

export default function Output(props) {

    let {data} = props;
    console.log("output data",data);
    return (
        <div>
        {(data)?(<div><b>Availability status:</b>{(data.available)?(<div><span>This Domain is available</span><br/>
            <span><b>Price:</b>{data.price}{data.currency}</span></div>):(<span>Sorry this domain is not Available</span>)}</div>)
            :(<div>Start typing to search for domain</div>)}
             

        </div>
    )
}
