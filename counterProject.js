var number = document.querySelector('.counter')
var text = document.querySelector('#text')
let count = 1
setInterval( () => {
    if(count<1000)
    count++;
    number.innerText= count;
}, 1)  

setTimeout( ()=>{
    text.innerText= "1000 Done"

},6300)