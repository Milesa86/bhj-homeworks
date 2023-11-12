const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products')


for (product of products) {
    let decBtn = product.querySelector('.product__quantity-control.product__quantity-control_dec');
    let incDtn = product.querySelector('.product__quantity-control.product__quantity-control_inc');
    let quantity = product.querySelector('.product__quantity-value');
    let addToCartBtn = product.querySelector('.product__add');
    let img = product.querySelector('.product__image').src;
    let idProduct = product.getAttribute('data-id');

   decBtn.addEventListener('click', (e) => {
    if (parseInt(quantity.innerText) > 1) {
        quantity.innerText = parseInt(quantity.innerText) - 1
    }
   });

   incDtn.addEventListener('click', (e) => {
    quantity.innerText = parseInt(quantity.innerText) + 1
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
