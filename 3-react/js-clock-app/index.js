
// Plain JS
//------------------

let indianClock = document.querySelector("#asia_kolkata");
let dubaiClock = document.querySelector("#asia_dubai")
let americaClock = document.querySelector("#america_newyork")

function clock(props) {

    // new Date().toLocaleTimeString
    return (
        `
     <div class="card">
        <p class="card-header"> ${props.timeZone} </p>
        <p class="card-body">
        <span class='badge badge-danger'>
        ${new Date().toLocaleTimeString('es-US', { timeZone: props.timeZone })} 
        </span>
        
        </p>
     </div>
    
    `)
}

setInterval(()=>{
indianClock.innerHTML = clock({ timeZone: 'Asia/Kolkata' })
dubaiClock.innerHTML = clock({ timeZone: 'Asia/Dubai' })
americaClock.innerHTML = clock({ timeZone: 'America/New_york' })
},1000)



// Reat JS
//-----------------

let indianClockV2 = document.querySelector("#asia_kolkata_v2");
let dubaiClockV2 = document.querySelector("#asia_dubai_v2")
let americaClockV2 = document.querySelector("#america_newyork_v2")

//function newClock(props){
// let btnEle=React.createElement('button',{className:"btn btn-primary"},'Click Here');
//indianClock.innerHTML=btnEle;
//  console.log(btnEle);

// return btnEle;

//}


//ReactDOM.render(newClock(),indianClockV2);

function newClock(props) {
    // JSX
    return (
        <div class="card">
            <p class="card-header"> {props.timeZone} </p>
            <p class="card-body">
                <span class="badge badge-success">
                {new Date().toLocaleTimeString('es-US', { timeZone: props.timeZone })}    
                </span> 
            </p>
        </div>

    )
}

setInterval(()=>{
    ReactDOM.render(newClock({ timeZone: 'Asia/Kolkata' }), indianClockV2)
    ReactDOM.render(newClock({ timeZone: 'Asia/Dubai' }), dubaiClockV2)
    ReactDOM.render(newClock({ timeZone: 'America/New_york' }), americaClockV2)
},1000)

