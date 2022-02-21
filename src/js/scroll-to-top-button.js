const scrollToTopButton = document.querySelector('.js-btn--scroll-top')

scrollToTopButton.addEventListener('click', scrollTop)

function scrollTop(e) {
    let xPos = window.scrollX
    let parent = e.target.parentNode.parentNode.parentNode.parentNode
    let pageContainer = document.getElementById(parent.id)
    pageContainer.scrollTo({
        top: 0,
        left: xPos,
        behavior: 'smooth'
    })
}