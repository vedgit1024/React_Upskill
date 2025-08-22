import React, { useState } from "react";
import Header from "./components/Header/header";
import Products from "./components/Products/products";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false); //showCart is variable and setShowCart is function

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  //Making states for cartItems, cartItems state update krne k liye mujhe info products aur cart dono mei bhejna hai isliye state yaha bnaenge
  const [cartItems, setCartItems] = useState([]); //Gave an empty array and will update the array with cart items on each add to cart click
  const handleAddToCart = (productId, productName, productImage) => {
    //This i will pass as a prop in Products which I will use in add to cart button onClick feature
    // console.log(productName);

    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({
    //   id: productId,
    //   name: productName,
    //   image: productImage,
    //   quantity: 1, //bydefault taking 1 on 1 click
    // }); //This won't make changes as pass by reference as we had read earlier about array copy
    // setCartItems(updatedCartItems);

    //Lets see another clean way of setCartItems, above way will flawlessly work

    const cartItem = {
      id: productId,
      name: productName,
      image: productImage,
      quantity: 1,
    };
    setCartItems((state) => [...state, cartItem]);
  };

  return (
    <div>
      <Header openCart={openCart} />;
      {/* This way we use the imported component */}
      {/*Aab header ka kaam hai sirf uss cart ko khol dena */}
      <Products onAddToCart={handleAddToCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
      ></Cart>
    </div>
  );
}

export default App;

//We keep app.js as much clean as possible
