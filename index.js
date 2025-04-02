const counterPara=document.getElementById("counter");
const error=document.getElementById("error")
const Inc=document.getElementById("Inc")
const Dec=document.getElementById("Dec")
const Clear=document.getElementById("Clr")

//let count=fal;
let counter=0


Inc.addEventListener("click",(e)=>{
    e.preventDefault()
    counter++
    (counter==0) ? error.innerText="Error: can not go below 0" :  error.innerText=""
    counterPara.innerText=`Your current Count is : ${counter}`
})

Dec.addEventListener("click",(e)=>{
    e.preventDefault()
    counter--
   counter>0 ? counter: error.innerText="Error: can not go below 0" 
    //(counter==0) ?
    counterPara.innerText=`Your current Count is : ${counter>0 ? counter : 0}`
})

Clear.addEventListener("click",(e)=>{
    e.preventDefault();
    counter=0;
     counterPara.innerText=`Your current Count is : 0`
      error.innerText="Error: can not go below 0" 
})