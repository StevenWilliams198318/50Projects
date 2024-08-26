const panels = document.querySelectorAll('.panel') // 1

panels.forEach(panel => { 
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}) // 2

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
} // 3


/*
Notes:
1 - Selecting all HTML elements with class 'panel' assign to panels.
2 - Iterating and adding event listener to each panel, and 'active' class to current 'panel' element.
3 - Removes the 'active' class from all the panels
*/
