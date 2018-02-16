import { TabNavigator } from 'react-navigation'
import Talk from './talk'
import About from './about'

export default TabNavigator({
  Talk: {
    screen: Talk
  },
  About: {
    screen: About
  }
})
