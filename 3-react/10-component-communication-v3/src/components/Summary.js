import React from 'react';
let Summary = (props) => {
    return (
        <h1>Total: <span className="badge badge-warning">{props.totalCount}</span></h1>
    )
}
export default Summary;