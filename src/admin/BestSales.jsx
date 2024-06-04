import React, { useEffect, useState } from 'react'
// import { sales } from '../../data'


const BestSales = () => {

    const [customers, setCustomers] = useState([])

    function fetchData() {
        fetch('../api/customers')
            .then(response => response.json())
            .then(data => {
                setCustomers(data.customers)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='top-sales'>
            <h2>Best Sales</h2>
            <div className='list'>
                {customers.map(sale => (
                    <div className="list-item" key={sale.id}>
                        <div className="user">
                            <img src={sale.avatar} alt={sale.userName} />
                            <div className='user-info'>
                                <span>{sale.userName}</span>
                                <span>{sale.email}</span>
                            </div>
                        </div>
                        <span className='amount'>${sale.amountOfSale}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSales