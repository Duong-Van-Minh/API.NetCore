import { Container, CssBaseline, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Catalog from '../../features/Catalog/Catalog';
import {Product} from '../models/product';
import Header from './Header';
function App() {
  const [products,setProducts ] = useState<Product[]>([])

 
  useEffect(() => {
    fetch("http://localhost:5002/api/Products")
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  function addProduct(){
    // setProducts(prevState => [...prevState,
    //    {
    //     id: prevState.length + 101,
    //     name: 'produc' + (prevState.length + 1),
    //     price: 100,
    //     brand: 'asda',
    //     description: 'asd',
    //     pictureUrl: 'asdsadas',
    //     quantityInStock:1
    // }])
  }
  return (
    <>
      <CssBaseline/>
      <Header />
      <Container>
          <Catalog products={products} addProduct= {addProduct}/>
      </Container>
      
      {/* <Catalog products={products} /> */}
    </>
  );
}

export default App;
