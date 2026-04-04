


const navDropdown = document.getElementById('navDropdown')
const navSections = document.getElementById('navSections')

navDropdown.addEventListener('click', ()=>{
    navSections.classList.toggle('show')
})


function showFab(label){
    const fabContainer = document.querySelectorAll('.active');
    fabContainer.forEach(element => {
        element.classList.toggle('active');
    });
    let activeFab =  document.getElementById(label);
    activeFab.classList.toggle('active');
}
