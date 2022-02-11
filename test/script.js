let a=100;
function outer(){
    let  a=10;

    function inner(){
        console.log(a);
        
    } 
    return inner;
}
const close=outer();
(close());
console.log(a);

// data hiding
function Counter(){
    var count=0;
    this.incrementCounter=function(){
        count++;
        console.log(count);
    }
    this.decrementCounter=function(){
        count--;
        console.log(count);
}

}
// the constructor function has access to the count variable as well.
const counter1= new Counter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.incrementCounter();
const b=100
function a(){
    let a=10;
    console.log(a,b);
}
a();

