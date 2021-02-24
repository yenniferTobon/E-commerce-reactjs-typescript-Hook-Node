import { ChangeEvent, useState, useEffect} from "react";
import { Order } from '../Interfaces/Order';

export const useFormHook = <T extends Object | Array<T>>(initState:T) => {

    const [order, setOrder] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        //const { name, value } = target;

        setOrder({
            ...order,
            [target.name]: target.value,
        });
    };

    return {
        order,
        handleChange,
        setOrder
    };
};
