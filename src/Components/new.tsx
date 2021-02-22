import React from 'react';

import { useForm } from 'react-hook-form';

export const New = () =>{

    const [orders, setOrders] = React.useState({
        id: '',
        name:''
    });

    const {id, name} = orders;

    React.useEffect(() => {
    }, []);

    const handleInputChange = (e: any) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        setOrders({
            ...orders,
            [ e.target.id ] :  e.target.value
        }); 
    }

    return (
        <div className="container mt-5">
        <h3>Add Order</h3>
        
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="id" name="id" onChange={ handleInputChange }/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="name" name="name" onChange={ handleInputChange} />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                  
                </div>
            </div>
      
    </div>
    )
}