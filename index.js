import {NativeModules,ToastAndroid,Platform} from 'react-native';

var RCTToastAndroid = Platform.OS === 'android' ? ToastAndroid : NativeModules.LRDRCTSimpleToast;

var SimpleToast = {
  // Toast duration constants
  SHORT: RCTToastAndroid.SHORT,
  LONG: RCTToastAndroid.LONG,

  // Toast gravity constants
  TOP: RCTToastAndroid.TOP,
  BOTTOM: RCTToastAndroid.BOTTOM,
  CENTER: RCTToastAndroid.CENTER,

  show: function (
    message,
    duration,
    keyboardAvoid,
    atRoot
  ) {
    if(Platform.OS === 'android' ) {
      RCTToastAndroid.show(message, duration === undefined ? this.SHORT : duration);
    } else {
      RCTToastAndroid.show(message, duration === undefined ? this.SHORT : duration, keyboardAvoid, atRoot);
    }
  },

  showWithGravity: function (
    message,
    duration,
    gravity,
    keyboardAvoid,
    atRoot
  ) {
    if(Platform.OS === 'android' ) {
      RCTToastAndroid.showWithGravity(message, duration === undefined ? this.SHORT : duration, gravity);
    } else {
      RCTToastAndroid.showWithGravity(message, duration === undefined ? this.SHORT : duration, gravity, keyboardAvoid, atRoot);
    }
  },
};

export default SimpleToast;
