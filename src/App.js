import Header from "./components/Header/header";
import Products from "./components/Products/products";

function App() {
  return (
    <div>
      <Header />; {/* This way we use the imported component */}
      <Products />
    </div>
  );
}

export default App;

//We keep app.js as much clean as possible
