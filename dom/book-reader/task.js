const book = document.getElementById('book');
const fontSizes = book.querySelectorAll('.font-size');

fontSizes.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();


        fontSizes.forEach(element => element.classList.remove('font-size_active'));

        item.classList.add('font-size_active')

        book.classList.remove('book_fs-big', 'book_fs-small');
        let fontSize = item.dataset.size;
        if(fontSize) {
            book.classList.add(`book_fs-${fontSize}`);
        }
    })
})