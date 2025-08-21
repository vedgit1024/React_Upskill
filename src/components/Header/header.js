import { useState } from "react";
import "./header.css"; //Imported the header.css file in jsx file header.js, Although wherever we import css file, doesn't matter.

import Modal from "../UI/Modal.js";

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
      {/* The props name that is mentioned in the Modal.js for Modal function, the names should be case sensitive or exactly same when using it after importing. */}
      {/* children prop that is passed inside Modal function in Modal.js is for nested content of className="modal" as {children} is used there clearly */}
      <Modal show={showCart} onClose={closeCart}>
        Hello from Cart
      </Modal>
      {/* {showCart && ( //When setShowCart function returned true on click to Cart button, openCart function called setShowCart function which set the showCart variable as true and now we are into modal.
        <div className="backdrop" onClick={closeCart}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            Hello from cart
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Header;
