
import { Order } from '../Interfaces/Order';
import { useEffect, useState, ChangeEvent } from 'react';
import { useFormHook } from '../hooks/useFormHook';
import { ReportHandler } from 'web-vitals';
import { useForm } from 'react-hook-form';
import { NavLink, Link } from "react-router-dom";

export const AddOrder = (props:any)  => {

    const { register, errors, handleSubmit } = useForm();
    const { order, handleChange, setOrder } = useFormHook<Order>({
        id: 0,
        name: ''
    });


    useEffect(() => {
        //console.log(order);
    }, [])
    
   
    const onSubmit = (data:Order) =>{
        console.log(data);
        console.log(props.orders);
        setOrder({
            ...props.orders,
            7 : data
        })
    }

    
    return (

        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="mb-3">
                <label className="form-label">id:</label>
                <input type="text" className="form-control" name='id' ref={
                    register({
                        required: { value: true, message:'field required'}
                    })
                }/>
            </div>
            <div>
                {errors?.id?.message}
            </div>
            <div className="mb-3">
                <label className="form-label">name:</label>
                <input type="text" className="form-control" name='name' ref={
                    register({
                        required: { value: true, message:'field required'}
                    })
                }/>
            </div>
            <div>
                {errors?.name?.message}
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button className="btn btn btn-warning btn-sl" type="submit">Add order</button>
                </div>
            </div>
            <pre>{JSON.stringify(order)}</pre>
        </form>
    )
}

export default AddOrder;