
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
