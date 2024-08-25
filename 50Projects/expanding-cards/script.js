//Selecting all HTML elements with class 'panel' assign to panels.
const panels = document.querySelectorAll('.panel')

//Iterating and adding event listener to each panel, and 'active' class to current 'panel' element.
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// Removes the 'active' class from all the panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
