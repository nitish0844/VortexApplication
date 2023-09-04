import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import PaymentHeader from '../../components/Payment/PaymentHeader';
import Payment from '../../components/Payment/Payment';
import PaymentHistory from '../../components/Payment/PaymentHistory';
import {useFocusEffect} from '@react-navigation/native';

const Paymenttab = () => {
  const scrollViewRef = useRef(null);

  useFocusEffect(() => {
    // Check if scrollViewRef is not null before scrolling
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: 0, y: 0, animated: false});
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContent}>
        <PaymentHeader />
        <Payment />
        <PaymentHistory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Paymenttab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    flexGrow: 1,
  },
  componentContainer: {
    marginBottom: 20, // Add appropriate margin between components
  },
});
