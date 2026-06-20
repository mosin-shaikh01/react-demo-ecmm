import React from 'react'
import { getProducts } from '../data/products' // Assuming you have an API file to fetch products
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'

function Home() {
    const products = getProducts(); // Assuming you have a function to fetch products
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to MyStore</h1>
        <p className="home-subtitle">Your one-stop shop for all your needs</p>
      </div>
      <div className="container">
            <h2 className="page-title">Our Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
      </div>
    </div>
  )
}

export default Home
