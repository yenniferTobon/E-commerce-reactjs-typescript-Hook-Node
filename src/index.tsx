import React from 'react'; 
import ReactDOM from 'react-dom';
import { Home } from './Components/Home';
import { New } from './Components/new';
import { AddOrder } from './Components/AddOrder';


ReactDOM.render(
    <React.StrictMode>
       <Home />
    </React.StrictMode>,
    document.getElementById('root')
);