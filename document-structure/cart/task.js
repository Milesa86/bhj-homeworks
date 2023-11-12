const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products')


for (product of products) {
    let controlButton = product.querySelectorAll('.product__quantity-control')
    let quantity = product.querySelector('.product__quantity-value');
    let addToCartBtn = product.querySelector('.product__add');
    let img = product.querySelector('.product__image').src;
    let idProduct = product.getAttribute('data-id');

    controlButton.forEach(function (button) {
        button.addEventListener('click', (e) => {
            if(e.target.classList.contains('product__quantity-control_dec')) {
                if (parseInt(quantity.innerText) > 1) {
                    quantity.innerText = parseInt(quantity.innerText) - 1
                }
            }
            if(e.target.classList.contains('product__quantity-control_inc')) {
                quantity.innerText = parseInt(quantity.innerText) + 1
            }

        })
    });

    addToCartBtn.addEventListener('click', () => {
        let productsAdded = document.querySelectorAll('.cart__product')
        let productInCart = Array.from(productsAdded).find(product => product.getAttribute('data-id') === idProduct)
        if (productInCart) {
            let existingQuantity = productInCart.querySelector('.cart__product-count')
            existingQuantity.innerText = parseInt(existingQuantity.innerText) + parseInt(quantity.innerText)
        } else {
            newProduct = `
                <div class="cart__product" data-id="${idProduct}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${quantity.innerText}</div>
                </div>`
            cartProducts.insertAdjacentHTML('beforeEnd', newProduct)
        }
    })    

} 
