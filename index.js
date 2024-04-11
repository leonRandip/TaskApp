let btn=document.getElementById('btn');
btn.addEventListener("click",btnclick);
function btnclick(){
    let element=document.querySelector("h1");
    element.textContent="Not a company";
    btn.classList.add("btn");
}
function add(a,b){
    console.log(a+b);
}
add(1,2);
let arr = [
  {
    name: "jebershon",
    desc: "student",
  },
  {
    name: "jebershon",
    desc: "student1",
  },
  {
    name: "jebershon",
    desc: "student2",
  },
];
arr.map((i,index)=>{
    console.log(i.name+" "+i.desc);
});
arr.filter((i)=>{
    if(i.desc=="student"){
        console.log(i.name);
    }
});

//a callback is a function that is passed as an argument to another function and is executed at a later point in time or in an response to an event

//Assignment
/*
Array of objects 
*/  