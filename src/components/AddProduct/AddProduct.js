import { useRef } from "react"; //useRef is another hook used to refer something
import Modal from "../UI/Modal";

function AddProduct({ showAddProduct, closeAddToProduct, onAddProduct }) {
  const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault(); //Bydefault form on every submit click refreshes the whole page. We don't want that in react, so we do this.
    const nameValue = nameRef.current.value;
    console.log(nameValue);
    onAddProduct(nameValue);
  }
  return (
    <Modal show={showAddProduct} onClose={closeAddToProduct}>
      <div className="add-product-container">
        <div className="add-product-heading">Add Product</div>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-label">Enter Product Name</div>
          <input className="form-input" ref={nameRef}></input>
          <button className="yellow-button submit-button">Add Product</button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
