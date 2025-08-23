import Modal from "../UI/Modal";
import "./Cart.css";
//Separate component bana raha hu CartItem and usme props pass karunga
function CartItem({ id, name, image, quantity, onIncQuantity, onDecQuantity }) {
  // return <div className="cart-item">{name}</div>;
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty: {quantity}</div>
          <button
            className="yellow-button qty-button qty-plus-button"
            onClick={() => onIncQuantity(id)}
          >
            +
          </button>

          <button
            className="yellow-button qty-button qty-minus-button"
            onClick={() => onDecQuantity(id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
//CartItem function Modal ke andar render ho rha hai, mapping ho gyi each item ke id, name, image ki and assets mei se wahi image corresponding to item.id jo cartItems array mei hai, waha se le raha hai
function Cart({
  showCart,
  closeCart,
  cartItems,
  onIncQuantity,
  onDecQuantity,
}) {
  //cartItems prop jo app.js mei dala tha Cart mei usko aab use krenge yaha
  return (
    <Modal show={showCart} onClose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartItems.length > 0
          ? cartItems.map(
              (
                item //Adding ternary operator, suppose cart is empty then there is no meaning of checkout button
              ) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  quantity={item.quantity}
                  onIncQuantity={onIncQuantity}
                  onDecQuantity={onDecQuantity}
                />
              )
            )
          : "Cart is Empty!"}
      </div>
      <div className="cart-buttons">
        <button className="black-button close-cart" onClick={closeCart}>
          Close
        </button>

        {cartItems.length > 0 && (
          <button className="yellow-button" onClick={closeCart}>
            {" "}
            {/*Wrapped the checkout button in curly braces to only display it when given condition is true */}
            Checkout
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
