import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TotalPresent = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: '#32DACE'}]}>
        <Text style={styles.boxText}>Total Present</Text>
        <View style={styles.daysContainer}>
          <Text style={styles.daysNumber}>12</Text>
          <Text>Days</Text>
        </View>
      </View>
      <View style={[styles.box, {backgroundColor: '#EA4D90'}]}>
        <Text style={styles.boxText}>Total Percentage</Text>
        <View style={styles.daysContainer}>
          <Text style={styles.daysNumber}>12</Text>
          <Text>Days</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 80,
    paddingHorizontal: 40,
  },
  box: {
    width: 145,
    height: 220,
    backgroundColor: 'blue',
    borderRadius: 15,
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    top: 10,
    fontWeight: '700',
    fontSize: 19,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    left: 10,
  },
  daysContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  daysNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TotalPresent;
