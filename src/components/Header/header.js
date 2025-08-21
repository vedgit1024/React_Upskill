import { useState } from "react";
import "./header.css"; //Imported the header.css file in jsx file header.js, Although wherever we import css file, doesn't matter.

function Header() {
  const [showCart, setShowCart] = useState(false); //showCart is variable and setShowCart is function

  function openCart() {
    setShowCart(true);
  }
  function closeCart() {
    setShowCart(false);
  }
  return (
    <div className="header">
      <h1>My React Store</h1>

      <div>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
      {showCart && ( //When setShowCart function returned true on click to Cart button, openCart function called setShowCart function which set the showCart variable as true and now we are into modal.
        <div className="backdrop" onClick={closeCart}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            Hello from cart
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
