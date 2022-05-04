import { useState } from "react";
import { Form } from "./Components/Form";
import { ProductList } from "./Components/ProductList";

function App() {
  const [products, setProducts] = useState([])
  console.log(products);

  const deleteProduct = (id) => {
    let newArray = products.filter(product => {
      return product.id !== id
    })
    setProducts(newArray)
  }
  return (
    <div className="App">
      <Form setProducts={setProducts}/>
      <ProductList deleteProduct={deleteProduct} products={products}/>
    </div>
  );
}

export default App;
