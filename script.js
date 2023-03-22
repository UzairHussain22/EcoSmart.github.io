window.onload = function(){
let checkbox = document.querySelector('#toggle')
let body = document.body;
let lampp  = document.querySelector('#light')
let nav = document.querySelector('.top-nav')





checkbox.onclick = function(){
    if(checkbox.checked  ==  true){
        body.classList.add('darkmode')
        lampp.classList.remove('lthid')
        nav.classList.remove('top-nav')
        nav.classList.toggle('top-navv')
        
    }
    else {
        body.classList.remove('darkmode')
        lampp.classList.add('lthid')
        nav.classList.remove('top-navv')
        nav.classList.toggle('top-nav')
   
    }
}}
// checkbox.addEventListener('', (e) => {

// let ischeck = e.target.ischeck;
// if(ischeck){


//     body.classList.add('darkmode');
// }
// else {

//     body.classList.remove('darkmode')
// }

// })