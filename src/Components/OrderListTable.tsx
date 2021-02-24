import React from 'react';
import { NavLink } from "react-router-dom";
import { Order } from "../Interfaces/Order";

const OrderListTable = (props: any) => {

    return (
        <table className="table" >
            <thead className="thead-light" >
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                   props.orders.length > 0 ?
                        props.orders.map((order: Order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.name}</td>
                                <td>
                                    <NavLink className="btn btn-sm btn-danger float-right ml-2" to="" type="Delete">Delete</NavLink>
                                    <NavLink className="btn btn-sm btn-warning float-right " to="/editOrder" type="submit">Edit</NavLink>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={3}>No orders</td>
                            </tr>
                        )}
            </tbody>
        </table>
    );
}

export default OrderListTable;