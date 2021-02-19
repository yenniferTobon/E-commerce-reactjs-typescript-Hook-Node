import React from 'react';
import OrderListTable from './OrderListTable';
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


export const Home = () => {
    const key = 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT';
    const url = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods';
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        /*try{
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': key,
                }
            })
            const sellOrders = await data.json();
            setOrders(sellOrders);
        }catch(err){
            console.log(err);
        }*/
    }


    return (
        <Router>
            <Navbar />
            <Switch>
            <Route path="/orderList">
                <div className="container mt-5">
                    <h2>Sell orders list</h2>
                    <OrderListTable orders={orders} />
                </div>
            </Route>
          </Switch>
        </Router>
    );
}

