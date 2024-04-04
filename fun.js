const header=document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu =document.querySelector('#menu-icon');
let navlist =document.querySelector('.navlist');

menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
})


window.addEventListener('onscroll',()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
})