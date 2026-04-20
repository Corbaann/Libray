const calculator = (()=>{
    let lastresult;
const add = (a,b) => {
    lastresult = a+b;
    return lastresult;
};
const sub = (a,b)=>{
    lastresult = a-b;
    return lastresult;
};
const mult = (a,b)=>{
 lastresult = a*b;
return lastresult;
};
const div = (a,b)=>{
 lastresult = a/b;
 return lastresult;
};
const getlastresult = ()=>lastresult;
return{add,sub,mult,div,getlastresult};
})();

console.log(calculator.add(2,4));
console.log(calculator.mult(2,9));
console.log(calculator.getlastresult());

