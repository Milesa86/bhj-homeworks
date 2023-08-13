let cookieSize = document.getElementById('cookie');
let cookieClicker = document.getElementById('clicker__counter')

let counter = 0;

cookieSize.addEventListener('click', () => {
    counter++;
    cookieClicker.textContent = counter;
    counter % 2 == 0 ? cookieSize.width = 250 : cookieSize.width = 200;
})