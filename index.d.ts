import { NativeModules, ToastAndroid, Platform } from 'react-native'

declare var SimpleToast: {
  // Toast duration constants
  SHORT: number,
  LONG: number,

  // Toast gravity constants
  TOP: number,
  BOTTOM: number,
  CENTER: number,

  show: (message: string, duration?: number, keyboardAvoid?: boolean, atRoot?: boolean) => void,

  showWithGravity: (message: string, duration: number, gravity: number, keyboardAvoid?: boolean, atRoot?: boolean) => void
}

export default SimpleToast
