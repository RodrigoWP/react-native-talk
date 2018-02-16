import { StackNavigator } from 'react-navigation'
import Home from './home'
import Talk from './talk'
import AsyncStorage from './async-storage'
import StyleLayout from './style-layout'
import NativeResources from './native-resources'

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Talk: {
    screen: Talk,
    navigationOptions: {
      header: null
    }
  },
  AsyncStorage: {
    screen: AsyncStorage,
    navigationOptions: {
      header: null
    }
  },
  StyleLayout: {
    screen: StyleLayout,
    navigationOptions: {
      header: null
    }
  },
  NativeResources: {
    screen: NativeResources,
    navigationOptions: {
      header: null
    }
  }
})
