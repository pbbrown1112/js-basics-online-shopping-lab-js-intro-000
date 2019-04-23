var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart (item) {

  var price = Math.floor(Math.random()*101);
  var itemObj = {itemName: item, itemPrice: price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}


function viewCart() {
  var currentCart = [];
  if (cart.length == 0) {
    return 'Your shopping cart is empty.';
  } else {
      for (var i = 0; i < cart.length; i++) {
      currentCart.push(cart[i]['itemName']+' at $'+cart[i]['itemPrice']);
      }
      if (cart.length == 1) {
        return `In your cart, you have ${currentCart}.`;
      }
      else if (cart.length == 2) {
        return 'In your cart, you have '+currentCart[0]+', and '+currentCart[1]+'.';
      }
      else if (cart.length >= 3) {
        return 'In your cart, you have '+currentCart[0]+', '+currentCart[1]+', '+currentCart[${i}]+', and '+currentCart[i.length]+'.';
      }
}
}

function total() {
  var totalValue = [];
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i]['itemPrice'];
  }
    return sum;
  }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (!cart[i][item]) {
      return 'That item is not in your cart.';
    }
    else {
      cart.splice(cart[i][item] ,1, item);
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
