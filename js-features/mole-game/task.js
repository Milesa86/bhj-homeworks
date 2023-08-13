let getHole = index => document.getElementById(`hole${index}`);
let deadMoles = document.getElementById('dead')
let lostMoles = document.getElementById('lost')

let quantityLost = parseInt(lostMoles.textContent)
let quantityDead = parseInt(deadMoles.textContent)

const gameOver = (message) => {
    quantityDead = 0;
    quantityLost = 0;
    deadMoles.textContent = quantityDead;
    lostMoles.textContent = quantityLost;
    alert(message);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole'))  {
            quantityDead += 1;
            deadMoles.textContent = quantityDead;
            if (quantityDead === 10) {
                gameOver('Вы победили!');
            }
        } else {
            quantityLost +=1;
            lostMoles.textContent = quantityLost;
            if (quantityLost === 5) {
                gameOver('Проигрыш!');
            }
        }
    }
}