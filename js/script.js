
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cls = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    });
    cls.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}
if(close){
    cls.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

window.onscroll = function(){
    nav.classList.remove('active');
}
