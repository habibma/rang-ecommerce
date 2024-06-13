import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable';
import { getOrders } from '../../api';

const Orders = () => {

  const [orders, setOrders] = useState([])

  function fetchData() {
    getOrders()
      .then(data => {
        setOrders(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'details',
      headerName: 'Products',
      width: 180,
      type: 'array',
      editable: false,
    },
    {
      field: 'customer',
      headerName: 'Customer',
      maxWidth: 180,
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
      field: 'date',
      headerName: 'Date',
      type: 'string',
      width: 180,
      editable: false,
    },

  ];

  return (
    <div className='orders-page'>
      <div className='top-bar'>
        <h2>Orders</h2>
      </div>
      <DataTable slug="products" columns={columns} rows={orders}/>
    </div>
  )
}

export default Orders