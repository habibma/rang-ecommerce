import React, { Suspense, lazy, useEffect, useState } from 'react'
import DataTable from '../DataTable';
import { getCollectionProducts } from '../../api';

const Add = lazy(()=> {
  return import('../Add')
})

const Products = () => {

  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [inputs, setinputs] = useState({});
  const [postRespose, setPostResponse] = useState('')

  const handleChange = ({ target }) => {
    const { value, name, type, checked } = target;
    setinputs(prevState => {
      return ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      })
    })
  }

  function fetchData() {
    getCollectionProducts()
      .then(data => {
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function postProduct(product) {
    fetch("../api/products", {
      method: "POST",
      body: JSON.stringify({
        id: product.id,
        productName: product.productName,
        image: product.image,
        category: product.category,
        price: product.price,
        description: product.description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setPostResponse(`The product with id ${json.product.id} submitted!`));
    setTimeout(() => setPostResponse(""), 4000)
  }

  const clearForm = () => {
    setinputs({
      id: "",
      productName: "",
      category: "",
      color: "",
      price: "",
      inStock: false
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    postProduct(inputs)
    clearForm()
    fetchData();
    setOpen(false)
  }

  const handleDelete = (id) => {
    fetch(`../api/products/${id}`, {
      method: "DELETE",
    })
      .then(res => res.text())
    fetchData();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Image',
      width: 85,
      renderCell: params => {
        return <img src={params.row.image} />
      }
    },
    {
      field: 'productName',
      headerName: 'Product Name',
      maxWidth: 180,
      type: 'string',
      editable: false,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 120,
      type: 'string',
      editable: false,
    },
    {
      field: 'color',
      headerName: 'Color',
      maxWidth: 100,
      type: 'string',
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      // type: 'number',
      maxWidth: 110,
      editable: false,
    },
    {
      field: 'inStock',
      headerName: 'In Stock',
      type: 'checkbox',
      maxWidth: 110,
      editable: true,
    },

  ];

  return (
    <div className='products-page'>
      <div className='top-bar'>
        <h2>Products</h2>
        <button onClick={() => setOpen(true)}>Add Product</button>
        <p className='notif'>{postRespose}</p>
      </div>
      <DataTable slug="products" columns={columns} rows={products} handleDelete={handleDelete} />
      <Suspense fallback={<h2>Loading...</h2>}>
        {open && <Add slug="product" columns={columns} setOpen={setOpen} value={inputs} onChange={handleChange} onSubmit={handleSubmit} required />}
      </Suspense>
    </div>
  )
}

export default Products