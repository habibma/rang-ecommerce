import React, { useEffect, useState } from 'react'
import Add from '../Add'
import DataTable from '../DataTable';
// import { products } from '../../../data'

const Products = () => {

  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [inputs, setinputs] = useState({});
  const [postRespose, setPostResponse] = useState('')

  const handleChange = ({ target }) => {
      const { value, name } = target;
      setinputs(prevState => {
        console.log(inputs[name]);
        return ({
          ...prevState,
          [name]: value
        })
      })
    }


  function fetchData() {
    fetch('../api/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data.products)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function postCustomer(product) {
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
      // avatar: "",
      userName: "",
      email: "",
      amountOfSale: "",
      isVerified: ""
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    postCustomer(inputs)
    clearForm()
    fetchData();
    setOpen(false)
  }

  const handleDelete = (id) => {
    console.log("row was deleted");
    fetch(`../api/products/${id}`, {
      method: "DELETE",
    })
      .then(res => res.text())
      .then(res => console.log(res))
    fetchData();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: params => {
        return <img src={params.row.image} />
      }
    },
    {
      field: 'productName',
      headerName: 'Product Name',
      maxWidth: 200,
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
      type: 'boolean',
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
      <DataTable slug="products" columns={columns} rows={products} handleDelete={handleDelete}/>
      {open && <Add slug="product" columns={columns} setOpen={setOpen} value={inputs} onChange={handleChange} onSubmit={handleSubmit} required />}
    </div>
  )
}

export default Products