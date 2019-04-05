// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// 3 principle of redux

// 1. single source of truth;
// 2. the state is readonly
// 3. state chanaged are made with pure function;


// const num1 = function(x) {
//     if(x > 3) {
//         return 5;
//     }else {
//         return 7;
//     }
// }
// function getNum(num1, num2) {
//     return Math.random() + num1 + num2;
// } predictable

// flux /// multiple store

import { createStore } from 'redux';

const initalState = {
    count: 0
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'UP':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DOWN':
            return {
                ...state,
                count: state.count - 1
            }
        case 'ADD_TWO':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'SUB_THREE':
            return {
                ...state,
                count: state.count - action.payload
            }
        default: 
            return state;
    }
    return state;
}

const store = createStore(reducer);
console.log(store)
store.subscribe(() => {
    console.log(store.getState())
});
store.dispatch(     {type: 'UP'}    );

store.dispatch(     {type: 'DOWN'}    );

store.dispatch(     {type: 'ADD_TWO', payload: 2 }    );
// console.log(store.getState());
store.dispatch(     {type: 'SUB_THREE', payload: 3}    );
// store.getState();
