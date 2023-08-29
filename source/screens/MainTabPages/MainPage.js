import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import HeadText from './../../components/MainPage/HeadText';
import QrCodeScanner from '../../components/MainPage/QrCodeScanner';
import AttendenceStats from '../../components/MainPage/AttendenceStats';
import NutrientFood from '../../components/MainPage/NutrientFood';

const MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeadText />
        <QrCodeScanner />
        <AttendenceStats />
        <NutrientFood />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;

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
