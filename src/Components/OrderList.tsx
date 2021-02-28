import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Order } from "../Interfaces/Order";
import { useFormHook } from '../hooks/useFormHook';
import OrderListTable from './OrderListTable';
import { useContext } from 'react';
import { OrdersContext } from '../Context/DataContext';

export const OrderList = () => {

    const key = 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT';
    const url = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods';

    const { orders, setOrders} = useContext(OrdersContext);

    /*const { order, setOrder, handleChange } = useFormHook<Order>({
        id: 0,
        name:''
    });*/
    
    
    
    return(
        <OrderListTable  orders= {orders}/>
    );
}