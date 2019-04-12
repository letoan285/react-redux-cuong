import React from 'react';
import HomePage from './containers/home/HomePage';
import ProductList from './containers/products/ProductList';
import NotFound from './components/NotFound';
import ProductDetail from './containers/products/ProductDetail';



const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/products',
        exact: true,
        component: ProductList
    },
    {
        path: '/products/detail/:id',
        exact: true,
        component: ProductDetail
    },
];

export default routes;