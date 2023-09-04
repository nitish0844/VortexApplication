import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VersionCheck from 'react-native-version-check';

const Account = () => {
  return (
    <View style={styles.Container}>
      <MaterialCommunityIcons
        name="account-box-outline"
        size={28}
        color="#fff"
      />
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={styles.text}>Account</Text>
      </View>
      <TouchableOpacity style={styles.next}>
        <Entypo
          name="chevron-small-right"
          size={30}
          color="#fff"
          style={styles.nextIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const Aboutgym = () => {
  return (
    <View style={styles.Container}>
      <FontAwesome5 name="dumbbell" size={22} color="#fff" />
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={styles.text}>Sell Notes</Text>
      </View>
      <TouchableOpacity style={styles.next}>
        <Entypo
          name="chevron-small-right"
          size={30}
          color="#fff"
          style={styles.nextIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const TermsAndCondition = () => {
  return (
    <View style={styles.Container}>
      <MaterialCommunityIcons
        name="information-outline"
        size={28}
        color="#fff"
      />
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={styles.text}>Terms and conditions</Text>
      </View>
      <TouchableOpacity style={styles.next}>
        <Entypo
          name="chevron-small-right"
          size={30}
          color="#fff"
          style={styles.nextIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const AppVersion = () => {
  const [version, getVersion] = useState('');

  const fetchVersion = async () => {
    try {
      const currentVersion = await VersionCheck.getCurrentVersion();
      getVersion(currentVersion);
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  fetchVersion();

  return (
    <View style={styles.Container}>
      <MaterialIcons name="send-to-mobile" size={28} color="#fff" />
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={styles.text}>App version</Text>
      </View>
      <View style={[styles.next, {marginRight: '1%'}]}>
        <Text style={styles.versionText}>{version}</Text>
      </View>
    </View>
  );
};

const ProfileSettings = () => {
  return (
    <View style={{marginTop: '2%', flex: 1, left: 10}}>
      <Account />
      <Aboutgym />
      <TermsAndCondition />
      <AppVersion />
    </View>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Add some spacing between the containers
    // gap: 5,
    left: '3%',
    top: '10%',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  next: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingRight: 20,
    right: 20,
  },
  Title: {
    left: 30,
    color: '#454545',
    fontWeight: '500',
  },
  versionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
