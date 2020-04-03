// datatypes

console.log('---- Data types ----');


/*

basic data types
----------------------
    1. simple/primitive ==> values
        a. undefined
        b. string
        c. number
        d. boolean
        e.bigint

    2. comple/reference ==> objects


*/

// 1. simple/primitive 
//-----------------------

// a. undefined
//-----------------
var v;  // undefined 

// b. string
//---------------

var name='Praveen'
var company='cognizant'

var dynamicString1='The trainer '+name+' is teaching in '+company;
var dynamicString2=
`
   The Trainer ${name} 
   is teaching in ${company}

`

var htmlTemplate=
`
    <div >
        <h1 style="color:red">  Trainer  ${name} </h1>
        <h1> Working for ${company} Company </h1>
    </div>
`

var divElement=document.querySelector("#d1");
divElement.innerHTML=htmlTemplate;

var result=`the sum of 1 and 2 is ${1+2}`

//------------------------------------------
// c. number
//------------------------------------------

var count=12;
var cost=12.87;

//-------------------------------------------
// d. boolean 
//-------------------------------------------
var inStock=false;
var isEdit=true;

var a1='Praveen'
var a2='James'


/*
imp notes
------------
false values : falase,"", 0 , undefined, null, NaN


*/

//-------------------------------------------------------
// e. bigint
//-------------------------------------------------------

var count=12345678910123456789101234567891012345678910n;









