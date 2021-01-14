import { NativeModules } from 'react-native'

type SplashType = {
  show: (duration?: number) => void
  hide: (duration?: number) => void
}

const { Splash } = NativeModules

export default Splash as SplashType
