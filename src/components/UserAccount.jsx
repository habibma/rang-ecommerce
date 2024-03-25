import { useContext } from "react"
import { GlobalContext } from "../context/Context"

export const Dashboard = () => {
    return (
        <div className="row">
            <h3 className="pro-heading">Dashboard</h3>
        </div>
    )
}


export const Orders = () => {

    const { orders } = useContext(GlobalContext);

    return (
        <div className="row">
            <h3 className="pro-heading">Orders</h3>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => {
                        return (
                            <tr key={order.orderID}>
                                <td>{order.orderID}</td>
                                <td>{order.date}</td>
                                <td>{order.status}</td>
                                <td>{order.price}</td>
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
            <button className="button btn-primary" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

