import { createContext, useState, useEffect } from 'react'
import { Order } from '../Interfaces/Order';
import { OrderList } from '../Components/OrderList';


export interface OrderContextData {
    orders: Order[],
    setOrders: (orders: Order[]) => void
  }
   
  export const orderContextDefaultValue: OrderContextData = {
    orders: [],
    setOrders: () => {}
}
   
  export const OrdersContext = createContext<OrderContextData>(orderContextDefaultValue);

  

  export const DataProvider: React.FC = ({ children }) => {
    const [ orders, setOrders ] = useState<Order[]>([]);

    const key = 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT';
    const url = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods';

    useEffect(() => {
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
          setOrders(sellOrders);
      }catch(err){
          console.log(err);
      }
  }

    return (
        
      <OrdersContext.Provider value={{ orders, setOrders }}>
        {children}
      </OrdersContext.Provider>
    );
  }
  export default DataProvider;