let cartItemObjects;
onLoad();
function onLoad() {
    loadCartItemObject();
    displayCartItems();
    cartPaymentDetails();
}
function thankYouFun(){
    alert("Thank you for Visiting Site... Visit Again!!")
}

function loadCartItemObject() {
    // console.log(cartItems);
    cartItemObjects = cartItems.map(cartItemId => {
        for (let i = 0; i < products.length; i++)
            if (cartItemId == products[i].id) {
                return products[i]
            }
    })
    // console.log(cartItemObjects)
}
function cartPaymentDetails() {
    let paymentContainerElement = document.querySelector(".payment-container");
    let totalItems = cartItems.length;
    let totalMRP = 0;
    let totaldis = 0;
    let finalPrice = 0;
    cartItemObjects.forEach(cartItem => {
        totalMRP += cartItem.price;
        totaldis += cartItem.discount;
        finalPrice = totalMRP - totaldis;
    })
    paymentContainerElement.innerHTML = ` <div>
        <p class="cart-detail"> Cart <span class="cart-quantity">${totalItems} Item</span></p>
                    <p class="price-dtl">Price Details</p>
                    <div class="flexbox"><span class="total-price">Total product price</span> <span>+&#8377;${totalMRP}</span> </div>
              <div class = "flexbox" id="border"> <span class="total-disc">Total Discounts</span> <span id="disc">-&#8377;${totaldis}</span></div>
              <div class = "flexbox" id="margintop"><span class="total-order">Order Total</span> <span class="total-order">&#8377;${finalPrice}</span></div>
                <button class="continue-btn" onclick = "thankYouFun()">Continue</button>
                </div>`
}
function removeFromCart(itemId) {
    cartItems = cartItems.filter(cartItemId => cartItemId != itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItemObject();
    displayCartItems();
    cartItemIcon();
    cartPaymentDetails();
}
function displayCartItems() {
    let allProductsContainerElement = document.querySelector(".all-products-container");
    let innerHtml = '';
    cartItemObjects.forEach(cartItemId => {
        innerHtml += generateItemHTML(cartItemId);
    })
    allProductsContainerElement.innerHTML = innerHtml;
}

function generateItemHTML(item) {
    return ` <div class="cart-item-container">
                 <img src="${item.image}" alt="Item-Image" class="item-image">
                 <div class="item-info">
                    <p class="cart-item-name">${item.product_name}</p>
                <p class="cart-item-price">&#8377;${item.price}</p>
                     <p class="cart-issue">All issue easy returns allowed in ${item.return_period} days</p>
                     <p class= "del-date">Delivery Date ${item.delivery_date}</p>
       <a class="remove-btn" onclick="removeFromCart(${item.id})">X Remove</a>
                     <span class="free-del">Free Delivery</span>
                 </div>
             </div>`
}




