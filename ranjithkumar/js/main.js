
const navBtn = document.getElementById('nav-Bar');
const toggleBtn = document.getElementById('toggleId');
const closeBtn = document.getElementById('closeIconID');

toggleBtn.addEventListener('click', ()=>{
    navBtn.classList.add('show')
    
})
closeBtn.addEventListener('click', ()=>{
    navBtn.classList.remove('show')
})

const nav = document.querySelectorAll('.navBar');
function takeAction (){
    navBtn.classList.remove('show')
}
nav.forEach(n => n.addEventListener('click', takeAction))

// Make Header active on scrollY greater than 500px

function boxShadow (){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 85)
    
        scrollHeader.classList.add('headerActive')
    
    else
        scrollHeader.classList.remove('headerActive')
    
}
window.addEventListener('scroll', boxShadow)



// Add move top button---------------------------->
const topBtn = document.querySelector('.toTopBtn');
function showBtn (){
    
    if(scrollY >= 100){
        topBtn.style.display = 'block'
    } else{
        topBtn.style.display = 'none'
    }
}
window.addEventListener('scroll', showBtn)

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home`, {
    interval: 200
})

sr.reveal(`.leftCol`, {
    origin: 'left',
    distance: '60px',
    interval: 300
})
sr.reveal(`.rightCol`, {
    origin: 'right',
    distance: '60px',
    interval: 300
})




