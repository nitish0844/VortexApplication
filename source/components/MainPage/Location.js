import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import MapViewDirections from 'react-native-maps-directions';
import Octicons from 'react-native-vector-icons/Octicons';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';

const Location = () => {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState({
    latitude: 10.794234556311489,
    longitude: 78.7031003209234,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0421,
  });

  const navigation = useNavigation();

  useEffect(() => {
    // Request location permission
    requestLocationPermission();

    // Refresh location every 2 seconds
    const locationInterval = setInterval(() => {
      requestLocationPermission();
    }, 2000);

    // Clean up interval when component unmounts
    return () => {
      clearInterval(locationInterval);
    };
  }, []);

  const requestLocationPermission = async () => {
    try {
      const permissionResult = await check(
        // PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      if (permissionResult === RESULTS.GRANTED) {
        // Permission granted, get current location
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setRegion(prevRegion => ({
              ...prevRegion,
              latitude,
              longitude,
            }));
            setLoading(false);
            console.log('Location updated:', latitude, longitude);
          },
          error => console.error(error),
          setLoading(false),
          {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
        );
      } else {
        const requestResult = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );

        if (requestResult === RESULTS.GRANTED) {
          // Permission granted, get current location
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setRegion(prevRegion => ({
                ...prevRegion,
                latitude,
                longitude,
              }));
              setLoading(false);
              console.log('Location updated:', latitude, longitude);
            },
            error => console.error(error),
            setLoading(false),
            {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
          );
        } else {
          setLoading(false);
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      setLoading(false);
      console.warn(err);
    }
  };
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {
    latitude: 10.749862368914718,
    longitude: 78.82246191443075,
  };
  const GOOGLE_MAPS_APIKEY = 'XXXXXXXXXXXXXXXXXXX';

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('MainPage')}>
          <Octicons name="chevron-left" color={'#000'} size={32} />
        </TouchableOpacity>
      </View>
      {loading ? ( // Render loader if loading is true
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={region}>
          <MapView.Marker coordinate={region} title="Current Location" />

          <MapView.Marker coordinate={destination} title="Tiger gym">
            <Image
              source={require('./custom.png')}
              style={styles.customMarker}
            />
          </MapView.Marker>
          <MapViewDirections
            origin={region}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={6}
            strokeColor="hotpink"
            optimizeWaypoints={true}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  titleContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: '10%',
    backgroundColor: '#fff',
    zIndex: 99,
    borderRadius: 250,
  },
  iconContainer: {
    margin: 10,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Location;
