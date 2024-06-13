import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { GlobalContext } from "../../context/Context"
import Button from "../../components/button/Button"
import { getOrders } from "../../api"

export const Dashboard = () => {

    const location = useLocation()

    return (
        <div className="row">
            <h3 className="pro-heading">Dashboard</h3>
            <div>
                {location.state?.message && <p className="warning">{location.state.message} <Link to="info">here</Link></p>}
            </div>
        </div>
    )
}


export const Orders = () => {

    // const { orders } = useContext(GlobalContext);

    const [orders, setOrders] = useState()

    const fetchData = () => {
        getOrders()
            .then(data => setOrders(data))
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="row">
            <h3 className="pro-heading">Orders</h3>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Details</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return (
                            <tr key={order.orderID}>
                                <td>{order.orderID}</td>
                                <td>{order.date}</td>
                                <td>{order.details}</td>
                                <td>{order.status}</td>
                                <td>{(order.price)}</td>
                                <td><button className="button">Edit</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export const Setting = () => {
    const { handleLogOut } = useContext(GlobalContext)

    return (
        <div className="row">
            <h3 className="pro-heading">Setting</h3>
            <Button type="primary" onClick={handleLogOut}>Log Out</Button>
        </div>
    )
}

