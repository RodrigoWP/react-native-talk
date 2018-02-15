import { StackNavigator } from 'react-navigation'
import Home from './home'
import Talk from './talk'

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
  }
})
