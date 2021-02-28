
import { Order } from '../Interfaces/Order';
import { useEffect, useState, ChangeEvent, FormEvent, FC, useContext } from 'react';
import { useFormHook } from '../hooks/useFormHook';
import { ReportHandler } from 'web-vitals';
import { useForm } from 'react-hook-form';
import { NavLink, Link } from "react-router-dom";
import { OrderList } from './OrderList';
import { OrdersContext } from '../Context/DataContext';
import { useHistory } from "react-router-dom";

export interface ISignUpResult {
    success: boolean;
    message: string;
}

export const AddOrder = () => {

    
    //const { register, errors } = useForm();
    const [ newOrder, setNewOrder ] = useState<Order>({
        id: 0,
        name: ''
    });

    let history = useHistory();
    const { orders, setOrders} = useContext(OrdersContext);
    const { id, name } = newOrder; 

    


    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        //const { name, value } = target;

        setNewOrder({
            ...newOrder,
            [target.name]: target.value,
        });
    };

    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        console.log(orders);

        setOrders([
            ...orders,
            newOrder
        ]);
        
        history.push("/orderList");
    };

    

    return (
        <form noValidate={true} onSubmit={handleSubmit}>
            <div className="row">
                <label htmlFor="id">id:</label>
                <input type="text" className="form-control" name='id' value={id} onChange={handleChange} />
                <span className="error">{id}</span>
            </div>
            <div className="row">
                <label htmlFor="name">name:</label>
                <input type="text" className="form-control" name='name' value={name} onChange={handleChange} />
                <span className="error">{name}</span>
            </div>
            <div className="row">
                <div className="col-sm-10">
                    <button className="btn btn btn-warning btn-sl"  type="submit">Add order</button>
                </div>
            </div>
            <div className="row">
                <span></span>
            </div>
            <pre>{JSON.stringify(id)}</pre>
        </form>
        
    )
}

export default AddOrder;