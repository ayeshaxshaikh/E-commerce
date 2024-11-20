import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allProducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('https://e-commerce-cllq.onrender.com/allproducts')
    .then((response) => response.json())
    .then((data) => setAllProducts(data))
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const removeProduct = async (id) => {
    await fetch('https://e-commerce-cllq.onrender.com/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
    await fetchInfo()
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
          {
            allProducts.map((product, index) => {
              return <>
                <div className='listproduct-format-main listproduct-format' key={index}>
                <img src={product.image} className='listproduct-product-icon'/>
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img src={cross_icon} onClick={() => removeProduct(product.id)} className='listproduct-remove-icon'/>
              </div>
              <hr />
              </>
            })
          }
      </div>
    </div>
  )
}

export default ListProduct