import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable'
import user from '../../assets/imgs/user.png'
import Add from '../Add'
import { deleteCustomer, getCustomers } from '../../api'

const Customers = () => {

  const [open, setOpen] = useState(false)
  const [customers, setCustomers] = useState([])
  const [inputs, setinputs] = useState({});
  const [postRespose, setPostResponse] = useState('')


  function fetchData() {
    getCustomers()
      .then(data => {
        setCustomers(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setinputs(prevState => {
      return ({
        ...prevState,
        [name]: value
      })
    })
  }

  function postCustomer(customer) {
    fetch("../api/customers", {
      method: "POST",
      body: JSON.stringify({
        id: customer.id,
        // avatar: "",
        userName: customer.userName,
        email: customer.email,
        amountOfSale: customer.amountOfSale,
        isVerified: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setPostResponse(`The customer with id ${json.customer.id} submitted!`));
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
    console.log(id, 'deleted')
    // deleteCustomer(id)
    //   .then(
    //     console.log('deleted')
    //   )
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      maxWidth: 100,
      type: 'file',
      renderCell: params => {
        return <img src={params.row.avatar || user} />
      },
    },
    {
      field: 'displayName',
      headerName: 'Firstname',
      maxWidth: 170,
      editable: false,
    },
    {
      field: 'lastName',
      headerName: 'LastName',
      maxWidth: 170,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      maxWidth: 250,
      editable: false,
    },
    {
      field: 'isVerified',
      headerName: 'Verified',
      maxWidth: 100,
      type: 'checkbox',
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
      <div className='top-bar'>
        <h2>Customers</h2>
        <button onClick={() => setOpen(true)}>Add Customer</button>
        <p className='notif'>{postRespose}</p>
      </div>
      <DataTable slug='customers' columns={columns} rows={customers} handleDelete={handleDelete} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} value={inputs} onChange={handleChange} onSubmit={handleSubmit} required />}
    </div>
  )
}

export default Customers