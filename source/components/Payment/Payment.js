import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// import useApi from '../api/Api';

// const data = [
//   {
//     cost: '600',
//   },
// ];

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState(false);
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // const paymentStatus = useSelector(state => state.paymentStatus);

  // const paymentStatus = useSelector(state => state.payment.paymentStatus);
  // const {fetchPaymentStatus, makePayment} = useApi();

  // useEffect(() => {
  //   fetchPaymentStatus();
  // }, []);

  console.log(paymentStatus);

  const fetchSubscriptionStatus = async () => {
    try {
      const response = await fetch('http://192.168.145.220:3000/subscription');

      if (response.status === 200) {
        const responseData = await response.json();
        const subscriptionStatus = responseData.paid;
        setPaymentStatus(subscriptionStatus);
        setLoading(false);
        console.log(subscriptionStatus);
      } else {
        console.log('Failed to fetch subscription data');
      }
    } catch (error) {
      console.error('Error fetching subscription data:', error);
    }
  };

  useEffect(() => {
    fetchSubscriptionStatus();
  }, []); // Fetch subscription status when the component mounts

  const handlePayment = async () => {
    try {
      const response = await fetch('http://192.168.145.220:3000/payment', {
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
        console.log('Payment data sent to backend successfully');
        setPaymentStatus(true); // Update payment status in UI
      } else {
        console.log('Failed to send payment data to backend');
      }
    } catch (error) {
      console.error('Error sending payment data:', error);
    }
  };

  // const handlePayment = () => {
  //   // Simulating payment success
  //   dispatch(setPaymentStatus(true));
  // };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.gymTitle}>Tiger Fitness Fee</Text>
        <Text style={styles.gymCost}>INR 600</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {backgroundColor: paymentStatus === true ? 'green' : '#FFA500'},
        ]}
        disabled={paymentStatus === true}
        onPress={handlePayment}>
        {loading ? (
          <ActivityIndicator color="#fff" /> // Show loader when loading
        ) : (
          <Text
            style={[
              styles.buttonText,
              {color: paymentStatus === true ? '#fff' : '#000'},
            ]}>
            {paymentStatus === true ? 'Paid' : 'Pay now'}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center', // Align text at the center horizontally
    marginTop: 40, // Add some top margin to create space between the title and top of the screen
  },
  gymTitle: {
    color: '#FFA500',
    fontWeight: '700',
  },
  gymCost: {
    color: '#fff',
    fontSize: 20,
    top: 10,
    fontWeight: '700',
  },
  buttonContainer: {
    height: 50,
    width: 200,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    alignSelf: 'center',
    top: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 2,
  },
});
