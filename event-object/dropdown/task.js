const dropdownList = document.querySelector('.dropdown__list')
const dropdownValue = document.querySelector('.dropdown__value')
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__link'))


dropdownValue.addEventListener('click', () => {
    dropdownList.classList.add('dropdown__list_active')
})

dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault()

    })
})
