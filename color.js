var red = document.querySelector('.red')
var yellow = document.querySelector('.yellow')
var pink = document.querySelector('.pink')
var green = document.querySelector('.green')
var center = document.querySelector('.center')

function getBgColor(backgorund){
    return window.getComputedStyle(backgorund).backgroundColor
}



var color = getBgColor(yellow)

// yellow.addEventListener("click", ()=>{
//     return center.style.backgroundColor = color
// })

const magixColor = (element, color) => {
    element.addEventListener("mouseenter", ()=>{
    return center.style.backgroundColor = color
})
}

magixColor(red,getBgColor(red))
magixColor(green,getBgColor(green))
magixColor(pink,getBgColor(pink))
magixColor(yellow,getBgColor(yellow))



