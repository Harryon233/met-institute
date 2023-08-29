window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scroll', scrollY >0)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


counterAnim = (qSelector, start = 0, end, duration = 1000) =>
{ const target = document.querySelector(qSelector); 
let startTimestamp = null;
const step = (timestamp) => { 
if (!startTimestamp) startTimestamp = timestamp;  
const progress = Math.min((timestamp - startTimestamp) / duration, 1);  
target.innerText = Math.floor(progress * (end - start) + start);  
if (progress < 1) {   
window.requestAnimationFrame(step); 
 } 
}; 
window.requestAnimationFrame(step);
};
 document.addEventListener("DOMContentLoaded", () => { 
counterAnim("#count1", 100, 450, 1000); 
counterAnim("#count2", 500000, 79000, 1500); 
counterAnim("#count3", 1000, 26, 2000); 
counterAnim("#count4", 500, -100, 2500);});