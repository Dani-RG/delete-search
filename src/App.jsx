import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchInput from './components/SearchInput';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState(productData);
  const [searchValue, setSearchValue] = useState('');

  const handleDelete = (id) => {
    const cleanProducts = [...products].filter(elem => elem._id !== id)
    setProducts(cleanProducts)
  }

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  const handleNewProduct = (newProduct) => {
    const productWithId = { ...newProduct, _id: products.length + 1 };
    setProducts([...products, productWithId])
  }

  return (
    <div>

      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch} />
      <div className="cart">
        {products
        .filter(elem => elem.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map(elem => {
          return <ProductCard product={elem} key={elem._id} handleDelete={handleDelete} />
        })}
      </div>
      <AddProduct handleNewProduct={handleNewProduct} />

    </div>
  );
}

export default App;