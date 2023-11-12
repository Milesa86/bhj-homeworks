const hasTooltips = document.querySelectorAll('.has-tooltip')


for (const link of hasTooltips) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = link.title;
     link.insertAdjacentElement('afterEnd', tooltip)
     link.addEventListener('click', (event) => {
        event.preventDefault();

        tooltip.classList.toggle('tooltip_active')

        let position = link.getBoundingClientRect();
        tooltip.style.left = position.left + 'px';
        tooltip.style.top = (position.top + position.height) + 'px';

    })

    
}