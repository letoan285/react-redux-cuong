import React from 'react';
import HomePage from './containers/home/HomePage';
import ProductList from './containers/products/ProductList';
import NotFound from './components/NotFound';



const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: true,
        main: () => <ProductList />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound />
    }
];

export default routes;