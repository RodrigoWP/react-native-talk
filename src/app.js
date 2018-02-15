import React from 'react'
import { View } from 'react-native'
import { StatusBar } from './components'
import Main from './screens'

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Main />
  </View>
)

export default App
