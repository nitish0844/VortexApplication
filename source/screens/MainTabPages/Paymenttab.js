import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import PaymentHeader from '../../components/Payment/PaymentHeader';
import Payment from '../../components/Payment/Payment';
import PaymentHistory from '../../components/Payment/PaymentHistory';

const Paymenttab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
