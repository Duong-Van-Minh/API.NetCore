import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [products,setProducts ] = useState([
    {name: 'product1', price: 1000.00},
    {name: 'product2', price: 2000.00}
  ])
  const [count, setCount] = useState(0);

  useEffect(() => {
    debugger
    fetch('http://localhost:5002/api/Products')
        .then(response => response.json())
        .catch(data => 
          
            setProducts(data) 
          )
  },[])
  return (
    <div className="App">
      <h1>Resto</h1>
      <p>You clicked {count} times</p>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </div>
  );
}

export default App;
