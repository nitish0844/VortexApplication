// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import PushNotification, {Importance} from 'react-native-push-notification';

// const Notification = () => {
//   const requestUserPermission = async () => {
//     try {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (enabled) {
//         console.log('Authorization status:', authStatus);
//       }
//     } catch (error) {
//       console.error('Error requesting permission:', error);
//     }
//   };

//   useEffect(() => {
//     requestUserPermission();
//   }, []);

//   useEffect(() => {
//     const handleNotification = messaging().onMessage(async remoteMessage => {
//       const {title, body, imageUrl} = remoteMessage.data;

//       PushNotification.localNotification({
//         title: title,
//         message: body,
//         channelId: '812019205023-9994365901',
//         vibration: 500,
//         vibrate: true,
//         playSound: true,
//         soundName: 'notification.mp3',
//         color: 'red',
//         actions: ['Open', 'Delete'],
//         userInfo: {key: 'value'},
//         // bigPictureUrl: 'https://wallpaperaccess.com/full/393752.jpg',
//         bigPictureUrl: imageUrl,
//         importance: Importance.LOW,
//         largeIconUrl: imageUrl,
//       });

//       messaging().setBackgroundMessageHandler(async remoteMessage => {
//         const {title, body, data, imageUrl} = remoteMessage.data;

//         const notificationPayload = {
//           channelId: '812019205023-9994365901', // Make sure this matches the channelId you defined in PushNotification.configure()
//           category: '812019205023-9994365901',
//           title: title,
//           message: body,
//           sound: 'notification.mp3', // Specify the custom notification sound file
//           userInfo: data, // Pass additional data to the notification
//           playSound: true,
//           // importance: Importance.HIGH,
//           importance: Importance.LOW,
//           actions: ['Open', 'Delete'],
//           bigPictureUrl: imageUrl,
//           largeIconUrl: imageUrl,
//           vibration: 500,
//           vibrate: true,
//           color: 'red',
//         };

//         PushNotification.localNotification(notificationPayload);

//         if (data && data.action === 'yourActionKey') {
//           // Perform the desired action when the app is killed or in the background
//           // For example, navigate to a specific screen or perform a specific task
//           // You can use navigation.navigate or other logic here
//         }
//       });
//     });
//     //   });

//     const configurePushNotification = async () => {
//       await messaging().registerDeviceForRemoteMessages();

//       messaging().onMessage(handleNotification);

//       PushNotification.createChannel(
//         {
//           channelId: '812019205023-9994365901',
//           channelName: 'com.sampleapp.app',
//           soundName: 'notification.mp3',
//           vibration: 500,
//           vibrate: true,
//           playSound: true,
//           actions: ['Open', 'Delete'],
//           importance: Importance.LOW,
//         },
//         created => console.log(`createChannel 3 returned '${created}'`),
//       );
//     };

//     configurePushNotification();
//   }, []);

//   return (
//     <View>
//       <Text>Notification</Text>
//     </View>
//   );
// };

// export default Notification;
