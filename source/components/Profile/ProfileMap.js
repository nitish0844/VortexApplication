import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProfileMap = ({}) => {
  const markerCoordinate = {
    latitude: 10.749862368914718,
    longitude: 78.82246191443075,
    latitudeDelta: 0.01, // Adjust this value for your desired zoom level
    longitudeDelta: 0.01, // Adjust this value for your desired zoom level
  };

  const navigation = useNavigation();

  const handleExpand = () => {
    // Navigate to another map page when the expand button is clicked
    // navigation.navigate('AnotherMapPage'); // Replace 'AnotherMapPage' with your actual page name
    navigation.navigate('Location');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.expandButton} onPress={handleExpand}>
        <Ionicons name="expand-outline" size={22} />
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={markerCoordinate}
          scrollEnabled={false} // Disable map scrolling
          zoomEnabled={false} // Disable map zooming
        >
          <Marker
            coordinate={markerCoordinate}
            title="Tiger gym"
            description="Marker Description">
            <Image
              source={require('../MainPage/custom.png')}
              style={styles.customMarker}
            />
          </Marker>
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 30,
  },
  expandButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopRightRadius: 20,
    padding: 10,
    zIndex: 99,
    width: 40,
    height: 40,
  },
  expandButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapContainer: {
    width: '90%',
    height: 250,
    marginTop: 50,
    borderRadius: 20, // Add the border radius here
    overflow: 'hidden', // Clip the map content to the rounded shape
  },
  map: {
    flex: 1,
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ProfileMap;
