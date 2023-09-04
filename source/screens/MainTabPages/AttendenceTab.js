import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import Calender from '../../components/Attendence/Calender';
import Header from './../../components/Attendence/Header';
import TotalPresent from '../../components/Attendence/TotalPresent';
import {useFocusEffect} from '@react-navigation/native';

const AttendenceTab = () => {
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
        <Header />
        <Calender />
        <View style={styles.componentContainer}>
          <TotalPresent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendenceTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    flexGrow: 1,
  },
  componentContainer: {
    marginBottom: -50, // Adjust the margin here to reduce space
  },
});
