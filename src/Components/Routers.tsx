import React from 'react';
import { AddOrder } from './AddOrder';
import { OrderList } from './OrderList'
import { Navbar }  from './Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { idText } from 'typescript';
import userEvent from '@testing-library/user-event';

export const Routers = () => {
    
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/orderList">
                    <div className="container mt-5">
                        <h3>Sell orders list</h3>
                        <NavLink className="btn btn-dark mr-2" to="/addOrder" type="submit">Add Order</NavLink>
                        <br />
                        <OrderList />
                    </div>
                </Route>
                <Route path="/addOrder">
                    <div className="container mt-5">
                        <AddOrder />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}