const aboutMeLabel = document.getElementById('aboutMeLabel')
const projectLabel = document.getElementById('projectLabel')
const specialtiesLabel = document.getElementById('specialtiesLabel')

function showSlide(label, tab){
    const contentSlide = document.querySelectorAll('.activeSlide');
    const contentTab = document.querySelectorAll('.activeTab');
    contentSlide.forEach(element => {
        element.classList.toggle('activeSlide');
    });
    contentTab.forEach(element => {
        element.classList.toggle('activeTab');
    });
    let activeSlide =  document.getElementById(label);
    activeSlide.classList.toggle('activeSlide');
    let activeTab = document.getElementById(tab);
    activeTab.classList.toggle('activeTab');
}
