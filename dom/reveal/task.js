const revealItems = document.querySelectorAll('.reveal')


window.addEventListener('scroll', () => {
    revealItems.forEach(item => {
        const location = item.getBoundingClientRect();
        item.classList.remove('reveal_active')

        if (location.top <= window.innerHeight && location.bottom <= window.innerHeight) {
            item.classList.add('reveal_active')
        }
    }

    )
})
