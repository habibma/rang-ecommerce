import React, { useState } from 'react'
import Add from '../Add'
import DataTable from '../DataTable';
import { products } from '../../../data'

const Products = () => {

  const [open, setOpen] = useState(false)
  const [inputs, setinputs] = useState({});

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
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen}  value={inputs} onChange={handleChange}/>}
    </div>
  )
}

export default Products