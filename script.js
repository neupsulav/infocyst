// navigation bar 
let hamburger = document.querySelector('.hamburger')
let navBar = document.getElementsByTagName('nav')[0]
let links = document.getElementById('links')
let ul = document.getElementsByClassName('ul')[0]

hamburger.addEventListener('click', () => {
    links.classList.toggle('links-show')
    navBar.classList.toggle('expand')
    navBar.style.transition = '1s'
    setTimeout(() => {
        ul.classList.toggle('links-expand')
    }, 500);
})
