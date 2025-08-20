import productsData from "../../data/products.json"; //We have all products in a json file which has an array of various objects
import "./products.css";
//I want to map productsData, as I want to make a product from the every data in array present in json file, so using map fxn.

function Product({ id, name, image }) {
  //Given props {id, name, image} -> Props are commands from parent to child
  return (
    <div key={id} className="product">
      <img src={require(`../../assets/${image}`)} alt={name} />
      <div className="product-name">{name}</div>
      <button className="yellow-button">Add to Cart</button>
    </div>
  );
}

function Products() {
  return (
    <div className="products-container">
      {productsData.map((product) => (
        // <div key={product.id} className="product">
        //   <img
        //     src={require(`../../assets/${product.image}`)}
        //     alt={product.name}
        //   />
        //   <div className="product-name">{product.name}</div>
        //   <button className="yellow-button">Add to Cart</button>
        // </div>
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
        />
        //key dena is must, other than that given props.
      ))}
    </div>
  );
}

export default Products;
//When using map function, always define a key, it is important in react.
//image dalne ke 2 tareeke hai--dynamically
//1-> we will use src = "require(`Dynamic URL`)""
