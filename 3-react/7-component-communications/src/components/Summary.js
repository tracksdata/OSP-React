import React from 'react';
const Summary=(props)=>{

    return(
        <div className="alert alert-info text-center">
            Total Actions: <span className="badge badge-danger">{props.totalCount}</span>
        </div>
    )
}
export default Summary