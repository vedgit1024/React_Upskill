import Modal from "../UI/Modal";
import "./Cart.css";
//Separate component bana raha hu CartItem and usme props pass karunga
function CartItem({ id, name, image, quantity }) {
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
          <button className="yellow-button qty-button qty-plus-button">
            +
          </button>

          <button className="yellow-button qty-button qty-minus-button">
            -
          </button>
        </div>
      </div>
    </div>
  );
}
//CartItem function Modal ke andar render ho rha hai, mapping ho gyi each item ke id, name, image ki and assets mei se wahi image corresponding to item.id jo cartItems array mei hai, waha se le raha hai
function Cart({ showCart, closeCart, cartItems }) {
  //cartItems prop jo app.js mei dala tha Cart mei usko aab use krenge yaha
  return (
    <Modal show={showCart} onClose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="cart-buttons">
        <button className="black-button close-cart" onClick={closeCart}>
          Close
        </button>

        <button className="yellow-button" onClick={closeCart}>
          Checkout
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
