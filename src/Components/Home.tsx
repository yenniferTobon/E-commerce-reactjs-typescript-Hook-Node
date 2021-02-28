import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import { Routers } from './Routers';
import { DataProvider } from '../Context/DataContext'

export const Home = () => {
    return (
        <DataProvider>
        <Routers />
        </DataProvider>
    );
};

export default Home;