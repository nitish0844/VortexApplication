import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
// import {useTheme} from 'react-native-paper';

const slides = [
  {
    key: 0,
    title: 'Monitor Important \n app events',
    text: 'Logmak helps you.',
    image: 'https://a1png.com/wp-content/uploads/2020/07/Mia-Khalifa-PNG-2.png',
  },
  {
    key: 1,
    title: 'Analyse your events and \n know where it happened.',
    text: 'With help of maps.',
    image: 'https://a1png.com/wp-content/uploads/2020/07/Mia-Khalifa-PNG-2.png',
  },
  {
    key: 2,
    title: 'Get Real time notifications \n on all of your events.',
    text: 'Logmak app is for you.',
    image:
      'https://e1.pxfuel.com/desktop-wallpaper/456/336/desktop-wallpaper-dani-daniels-hot-full-card-from-1920x1200-for-your-mobile-tablet-danny-daniel.jpg',
  },
];

const Slider = () => {
  const sliderRef = useRef();

  //   const paperTheme = useTheme();

  const slideToNext = i => {
    if (i === 2) {
      // navigation.navigate('GetStartedScreen');
      //   navigation.navigate('AuthScreen');
      console.log('Next Scren');
    } else {
      sliderRef.current.goToSlide(i + 1);
    }
  };

  return (
    <SafeAreaView>
      <AppIntroSlider
        ref={sliderRef}
        // onSlideChange={s => {}}
        renderItem={({item}) => {
          return (
            <View style={styles.slide}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: 500,
                  height: 200,
                  marginVertical: 32,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                {item.text}
              </Text>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    slideToNext(item?.key);
                  }}
                  style={{
                    width: 200,
                    padding: 15,
                    borderRadius: 12,
                    alignItems: 'center',
                    marginVertical: 10,
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#000',
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        data={slides}
        activeDotStyle={{
          marginHorizontal: 10,
        }}
        dotStyle={{marginHorizontal: 10, backgroundColor: 'red'}}
        renderDoneButton={() => null}
        renderNextButton={() => null}
      />
    </SafeAreaView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
