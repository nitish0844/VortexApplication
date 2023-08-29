// import {createStore, combineReducers} from 'redux';
// import paymentReducer from './Reducers/PaymentReducer';

// const rootReducer = combineReducers({
//   payment: paymentReducer,
// });

// const store = createStore(rootReducer);

// export default store;

import {createStore} from 'redux';
import paymentReducer from './Reducers/PaymentReducer'; // Assuming you have a rootReducer

const store = createStore(paymentReducer);

export default store;
