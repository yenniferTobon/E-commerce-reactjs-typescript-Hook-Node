import React from 'react';
import OrderListTable from './OrderListTable';
import Navbar from './Navbar';
import { AddOrder } from './AddOrder';
import { Order } from '../Interfaces/Order';
import { useFormHook } from '../hooks/useFormHook';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { idText } from 'typescript';
import userEvent from '@testing-library/user-event';



export const Home = () => {
    const key = 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT';
    const url = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods';



    const { order, setOrder, handleChange } = useFormHook<Order>({
        id: 0,
        name:''
    });

  
    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': key,
                }
            })
            const sellOrders = await data.json();
            setOrder(sellOrders);
        }catch(err){
            console.log(err);
        }
    }

    //add order
   const addOrder = (data: Order) =>{
    
    console.log(data);
   }
  
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/orderList">
                    <div className="container mt-5">
                        <h3>Sell orders list</h3>
                        <NavLink className="btn btn-dark mr-2" to="/addOrder" type="submit">Add Order</NavLink>
                        <br />
                        <OrderListTable orders={order}/>
                    </div>
                </Route>
                <Route path="/addOrder">
                    <div className="container mt-5">
                        <AddOrder orders={order}/>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

