const digiFilesLabel = document.getElementById('digitalFiles');
const techLabel = document.getElementById('techniques');
const constructionLabel = document.getElementById('construction');
const slides = document.getElementsByClassName('expSlide');
const rightArrow = document.querySelectorAll('.arrow')
const leftArrow = document.querySelectorAll('.flipArrow')
const navDropdown = document.getElementById('navDropdown')
const navSections = document.getElementById('navSections')

navDropdown.addEventListener('click', ()=>{
    navSections.classList.toggle('show')
})


function showFab(label,tab){
    const fabContainer = document.querySelectorAll('.active');
    const fabTab= document.querySelectorAll('.activeTab');
    fabContainer.forEach(element => {
        element.classList.toggle('active');
    });
    fabTab.forEach(element=> {
        element.classList.toggle('activeTab');
    })
    let activeFab =  document.getElementById(label);
    activeFab.classList.toggle('active');
    let activeTab = document.getElementById(tab);
    activeTab.classList.toggle('activeTab');
}


let slideIndex = 0;

function plusSlides(n){ 
    showSlides(slideIndex +=n);
}

showSlides(slideIndex);

rightArrow.forEach(element => {
    element.addEventListener('click', function(event){
        plusSlides(1)
})})

leftArrow.forEach(element => { 
    element.addEventListener('click', function(event){
        plusSlides(-1)
})})


function showSlides(n){ 
    let i 

    if (n>=slides.length-1){
        slideIndex=slides.length-1;
    }
    else if (n<=0) {
        slideIndex=0;
    }
    
    for (i=0; i<slides.length; i++){
        slides[i].style.display='none';
    }
    slides[n].style.display = 'flex';
}