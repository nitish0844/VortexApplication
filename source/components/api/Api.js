import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setPaymentStatus} from '../Redux/Store/Actions/PaymentAction';

const BASE_URL = 'http://192.168.76.220:3000';

const useApi = () => {
  const dispatch = useDispatch();

  const fetchPaymentStatus = async () => {
    try {
      console.log('Fetching payment status...');
      const response = await axios.get(`${BASE_URL}/subscription`);
      if (response.status === 200) {
        const subscriptionStatus = response.data.paid;
        // console.log('Fetched payment status:', subscriptionStatus);
        dispatch(setPaymentStatus(subscriptionStatus));
        // console.log('Payment status dispatched.');
        return;
      }
    } catch (error) {
      console.error('Error fetching payment status:', error);
    }
  };

  const makePayment = async () => {
    try {
      const response = await fetch(`${BASE_URL}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-razorpay-signature':
            'ea0bb784910e392582ed9e2146cf9ab9045756a6a24b5790edbc135ac09a9bc4',
        },
        body: JSON.stringify({
          status: 'success',
          amount: 600,
          paymentId: 'payment123',
        }),
      });

      if (response.status === 200) {
        // console.log('Payment data sent to backend successfully');
        dispatch(setPaymentStatus(true)); // Update payment status in Redux
      } else {
        console.log('Failed to send payment data to backend');
      }
    } catch (error) {
      console.error('Error sending payment data:', error);
    }
  };

  return {fetchPaymentStatus, makePayment};
};

export default useApi;
