import React from 'react'; 
import ReactDOM from 'react-dom';
import { Home } from './Components/Home';
import { Routers } from './Components/Routers';
import { DataProvider } from './Context/DataContext';

ReactDOM.render(
    <React.StrictMode>
        <DataProvider>
            <Home />
    </DataProvider>
    </React.StrictMode>,
    document.getElementById('root')
);