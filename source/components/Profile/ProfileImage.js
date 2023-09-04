import {
  View,
  Text,
  Image,
  StyleSheet,
  LogBox,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import ImageView from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultImage =
  'https://free4kwallpapers.com/uploads/originals/2015/07/23/tron-lamborghini.jpg';

const ProfileImage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={{marginTop: 100}}
          size="large"
          color="#FF0000"
        />
      ) : (
        <Image
          source={{uri: defaultImage}}
          style={styles.image}
          resizeMode="cover"
          onLoad={handleImageLoad}
        />
      )}
      <Text style={styles.text}>Nitish Cooper</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 70,
    marginTop: 50,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
});

export default ProfileImage;
