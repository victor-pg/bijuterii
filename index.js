const img = document.querySelector('.introduction-image img');

if(img){
    img.style.margin=0; 
}

let check = true;

const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');
burger.onclick=()=>{
    if(check){
        navList.style.transform = "translateX(0%)";
        check=false;
    }else{
        navList.style.transform = "translateX(100%)";
        check=true;
    }
    navLinks.forEach((link,index)=>{
        link.style.animation=`navLinkFade 1.5s ease forwards ${index/7}s`;
    })
}