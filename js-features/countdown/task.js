let timerStart  = document.getElementById('timer');

let countDown = null;

countDown = setInterval(() => {
    timerStart.textContent--;
    if (parseInt(timerStart.textContent) < 1) 
    {
        clearInterval(countDown);
        alert('Вы победили в конкурсе!');
    }
}, 1000)
