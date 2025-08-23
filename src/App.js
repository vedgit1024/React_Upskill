import React, { useState } from "react";
import Header from "./components/Header/header";
import Products from "./components/Products/products";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import initialProductData from "../src/data/products.json";

function App() {
  const [showCart, setShowCart] = useState(false); //showCart is variable and setShowCart is function

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const openAddToProduct = () => setShowAddProduct(true);
  const closeAddToProduct = () => setShowAddProduct(false);

  const [products, setProducts] = useState(initialProductData);

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

    // const cartItem = {
    //   id: productId,
    //   name: productName,
    //   image: productImage,
    //   quantity: 1,
    // };
    // setCartItems((state) => [...state, cartItem]);

    //Now in lecture 4, what I want is, I want to just increment the item quantity if item is already present in the cart rather than adding duplicate of it which our earlier commented code was doing.

    //For that,
    const itemIndexPresent = cartItems.findIndex(
      (item) => item.id === productId
    );
    //This will return -1 if not present
    if (itemIndexPresent === -1) {
      const cartItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setCartItems((state) => [...state, cartItem]);
    } else {
      const updatedCartItems = [...cartItems]; //This way we will change things pass by value and not by reference
      updatedCartItems[itemIndexPresent].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const itemIndexPresent = cartItems.findIndex(
      (item) => item.id === productId
    );
    let updatedCartItems = [...cartItems]; //This way we will change things pass by value and not by reference
    updatedCartItems[itemIndexPresent].quantity += 1;
    setCartItems(updatedCartItems);
    console.log("Inc");
  };

  const handleDecreaseQuantity = (productId) => {
    const itemIndexPresent = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (itemIndexPresent !== -1) {
      let updatedCartItems = [...cartItems];
      updatedCartItems[itemIndexPresent].quantity -= 1;

      // 👇 use filter to remove items with quantity <= 0
      updatedCartItems = updatedCartItems.filter((item) => item.quantity > 0);

      setCartItems(updatedCartItems);
      console.log("Dec");
    }
  };

  const handleAddProduct = (productName) => {
    console.log(productName);
    const product = {
      id: products.length + 1,
      name: productName,
      image: "default_product.jpg",
    };
    setProducts((state) => [...state, product]);
    //Modal is not closing after adding a product.so
    setShowAddProduct(false);
  };

  return (
    <div>
      <Header openCart={openCart} openAddToProduct={openAddToProduct} />;
      {/* This way we use the imported component */}
      {/*Aab header ka kaam hai sirf uss cart ko khol dena */}
      <Products products={products} onAddToCart={handleAddToCart} />{" "}
      {/*Now I have added products prop and passing json from here */}
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncQuantity={handleIncreaseQuantity}
        onDecQuantity={handleDecreaseQuantity}
        // decCountItem={decCount}
      ></Cart>
      <AddProduct
        showAddProduct={showAddProduct}
        closeAddToProduct={closeAddToProduct}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}

export default App;

//We keep app.js as much clean as possible
