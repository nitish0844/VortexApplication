const initialState = {
  paymentStatus: false,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAYMENT_STATUS':
      // console.log('Setting payment status:', action.payload);
      return {
        ...state,
        paymentStatus: action.payload,
      };
    default:
      // console.log('Default case. Current state:', state);
      return state;
  }
};

export default paymentReducer;
