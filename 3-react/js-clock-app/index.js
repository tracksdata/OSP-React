console.log('index js file');



function jsTick() {
    let jsClock = document.querySelector("#js-clock");
    fetch('https://jsonplaceholder.typicode.com/users') // model
        .then(response => response.json())
        .then((mydata) => {
            // console.log(mydata);
            mydata.map(data => {
                jsClock.innerHTML = JSON.stringify(data); // view

            })
        
            //jsClock.innerHTML = mydata;

        })
        .catch(error=>{
            console.log(error);
            
        })


    

    let time = new Date().toLocaleTimeString();
    let ui = `
        <div>
             <span class='badge badge-primary'> ${time}</span>
        </div>

        `
    // jsClock.innerHTML = ui;

}

//setInterval(jsTick,1000);



