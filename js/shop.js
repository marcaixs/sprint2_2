// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    let found = false;
    for (let i of products){
        if (i.id == id){
            for(let j of cart){  
                found = id == j.id ? true : false;
                if(found){
                    j.quantity += 1;
                    
                    console.log(found)
                    console.log(cart);
                }
            }
            if (!found){
                i.quantity = 1;
                                
                cart.push(i);
                console.log(found)
                console.log(cart)
            }
        }
    }
    total += 1;
    document.getElementById("count_product").innerHTML = total;
    
}

// Exercise 2
function cleanCart() {
    cart = [];
    total = 0;
    document.getElementById("count_product").innerHTML = total;
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").innerHTML = 0;
    console.log(cart);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let totalPrice = 0;
    for (i of cart){
        totalPrice += i.price;
    }
    return totalPrice;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(i of cart){
        if (i.id == 1){
            if (i.quantity >= 3){
                i.price = (i.price - (i.price * 0.20)).toFixed(2);
            }
        }
        if(i.id == 3){
            if (i.quantity >= 10){
                i.price = (i.price - (i.price * 0.30)).toFixed(2);
            }
        }
    }
    console.log(cart);
}

// Exercise 5
function printCart() {
    let list = "";
    let totalPrice = 0;
    applyPromotionsCart();
    
    for (i of cart){       
        list+= "<tr> <th scope='row'>"+i.name+"</th> <td>"+i.price+
            "</td> <td>"+i.quantity+"</td> <td> $"+i.quantity*i.price+"</td> </tr>";
        totalPrice += i.quantity*i.price;
    };
    totalPrice = totalPrice.toFixed(2);
    document.getElementById("cart_list").innerHTML = list;
    document.getElementById("total_price").innerHTML = totalPrice;
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    for(let i; cart.length; i++){
        if (cart[i].id == id){
            if (cart[i].quantity == 1){
                cart.splice(i, 1);
                total -=1;
            }
            if(cart[i].quantity > 1){
                cart[i].quantity =- 1;
                total -=1;               
            }
        }
    }
    applyPromotionsCart();    
    document.getElementById("count_product").innerHTML = total;
    console.log(cart);
}


function open_modal() {
    printCart();
}