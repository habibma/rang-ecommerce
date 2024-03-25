import React from 'react'
import { sales } from '../../data'

const BestSales = () => {
    return (
        <div className='top-sales'>
            <h2>Best Sales</h2>
            <div className='list'>
                {sales.map(sale => (
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