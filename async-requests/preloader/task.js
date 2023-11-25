const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();



xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active')
        const jsonData = JSON.parse(xhr.responseText).response.Valute;
        for (item in jsonData) {
            let charCode = jsonData[item].CharCode
            let value = jsonData[item].Value
            let div = `
            <div class="item__code">
                    ${charCode}
                </div>
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            `
            items.insertAdjacentHTML('beforeend', div)
        }
    }
})

xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', 'async')
xhr.send()