import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileImage from '../../components/Profile/ProfileImage';
import ProfileSettings from './../../components/Profile/ProfileSettings';
import ProfileMap from '../../components/Profile/ProfileMap';
import {useFocusEffect} from '@react-navigation/native';

const ProfileTab = () => {
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
        <ProfileHeader />
        <ProfileImage />
        <ProfileSettings />
        <ProfileMap />
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default ProfileTab;
