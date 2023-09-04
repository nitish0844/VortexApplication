import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';

const QrCodeScanner = () => {
  // const [scannerVisible, setScannerVisible] = useState(false);
  const Navigation = useNavigation();

  // const toggleScanner = () => {
  //   setScannerVisible(!scannerVisible);
  // };

  // const handleReadQRCode = e => {
  //   // Handle the scanned QR code data here
  //   console.log('Scanned data:', e.data);
  //   // You can close the scanner after scanning if needed
  //   setScannerVisible(false);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.IconContainer}
        onPress={() => Navigation.navigate('Login')}>
        <MaterialCommunityIcons name="qrcode-scan" color={'#fff'} size={26} />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.IconContainer}
        onPress={() => Navigation.navigate('Location')}>
        <MaterialIcons name="location-on" color={'#fff'} size={29} />
      </TouchableOpacity> */}

      {/* {scannerVisible && (
        <View style={styles.scannerContainer}>
          <TouchableWithoutFeedback onPress={toggleScanner}>
            <View style={styles.closeButton}>
              <MaterialCommunityIcons name="close" color={'#fff'} size={26} />
            </View>
          </TouchableWithoutFeedback>
          <QRCodeScanner
            cameraStyle={{flex: 1}}
            onRead={handleReadQRCode}
            flashMode={RNCamera.Constants.FlashMode.auto}
          />
        </View>
      )} */}
    </View>
  );
};

export default QrCodeScanner;

const styles = StyleSheet.create({
  IconContainer: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 5,
    paddingHorizontal: 3,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  scannerContainer: {
    flex: 1,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  blurContainer: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color for the overlay
    zIndex: 2, // Place the overlay above other components
  },
});
