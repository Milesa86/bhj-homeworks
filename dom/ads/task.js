
const card = document.querySelector('.card')
const rotatorItem = card.querySelectorAll('.rotator__case')
let currentIndex = 0;

const rotatorChanges = function() {
    rotatorItem.forEach((item, index) => {
        if(index === currentIndex) {
            item.classList.add('rotator__case_active');
        } else {
            item.classList.remove('rotator__case_active');
        }
    });

    currentIndex = (currentIndex + 1) % rotatorItem.length;
}

let rotatorInterval = window.setInterval(rotatorChanges, 1000);