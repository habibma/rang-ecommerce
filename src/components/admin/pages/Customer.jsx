import React from 'react'
import Single from '../Single'
import { singleCustomer } from '../../../data'

const Customer = () => {

    //fetch data an pass down to the single component

    return (
        <div className='customer-single-page'>
            <Single {...singleCustomer}/>
        </div>
    )
}

export default Customer