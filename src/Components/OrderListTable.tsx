import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hover from 'react-bootstrap';

const OrderListTable = (props: any) => {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.orders.length > 0 ?
                        props.orders.map((order: any) => (
                            <tr key={order.id}>
                                <td>{order.id} </td>
                                <td>{order.name}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning float-right">Edit</button>
                                    <button className="btn btn-sm btn-danger float-right mx-2">Delete</button>
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