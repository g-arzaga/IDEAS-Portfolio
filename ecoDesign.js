const navDropdown = document.getElementById('navDropdown')
const navSections = document.getElementById('navSections')

navDropdown.addEventListener('click', ()=>{
    navSections.classList.toggle('show')
})

