import React, { useEffect, useState } from 'react'
import Single from '../Single'
import { getCustomer } from '../../api'
import { useParams } from 'react-router-dom'
import user from '../../assets/imgs/user.png'

const Customer = () => {

    const [customer, setCustomer] = useState()
    const { id } = useParams()

    useEffect(() => {
        getCustomer(id)
            .then(data => setCustomer({
                id: data.id,
                title: data.displayName,
                avatar: data.image || user,
                info: {
                    firstName: data.displayName,
                    lastName: data.lastName,
                    email: data.email,
                    address: `${data.city}, ${data.street}, ${data.number}`,
                    postalCode: data.postalCode,
                },
                activities: [
                    {
                        text: "Purchased by John Doe",
                        time: "2024-03-19T10:00:00Z",
                    },
                    {
                        text: "Purchased by John Doe",
                        time: "2024-03-19T10:00:00Z",
                    },
                    {
                        text: "Purchased by John Doe",
                        time: "2024-03-19T10:00:00Z",
                    },
                    // more purchase history objects will be added here
                ],
            }))
    }, [])

    return (
        <div className='customer-single-page'>
            <Single {...customer} />
        </div>
    )
}

export default Customer