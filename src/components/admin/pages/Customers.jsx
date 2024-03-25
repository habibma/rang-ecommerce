import React from 'react'
import DataTable from '../DataTable'
import user from '../../../assets/imgs/user.png'
import { sales } from '../../../data'


const Customers = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      maxWidth: 100,
      renderCell: params => {
        return <img src={params.row.avatar || user} />
      }
    },
    {
      field: 'userName',
      headerName: 'Username',
      maxWidth: 170,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      maxWidth: 220,
      editable: false,
    },
    {
      field: 'isVerified',
      headerName: 'Verified',
      maxWidth: 100,
      type: 'boolean',
      editable: false,
    },
    {
      field: 'amountOfSale',
      headerName: 'Amount',
      type: 'number',
      maxWidth: 100,
      editable: false,
    }
  ];

  return (
    <div className='customers-page'>
      <h2>Customers</h2>
      <DataTable slug='customers' columns={columns} rows={sales} />
    </div>
  )
}

export default Customers