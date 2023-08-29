import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const PaymentHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('MainPage')}>
          <Octicons name="chevron-left" color={'#fff'} size={32} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Payment</Text>
        </View>
        <TouchableOpacity style={styles.IconContainer}>
          <SimpleLineIcons name="options-vertical" color={'#fff'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    top: 22,
    fontWeight: '700',
  },
  TitleContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: 10,
    marginTop: 20,
  },
  IconContainer: {
    right: 20,
    top: 25,
  },
});

export default PaymentHeader;
