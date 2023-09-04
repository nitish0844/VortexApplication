import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import HeadText from './../../components/MainPage/HeadText';
import QrCodeScanner from '../../components/MainPage/QrCodeScanner';
import AttendenceStats from '../../components/MainPage/AttendenceStats';
import NutrientFood from '../../components/MainPage/NutrientFood';
import {useFocusEffect} from '@react-navigation/native';

const MainPage = () => {
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
