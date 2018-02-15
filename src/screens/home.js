import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Home extends PureComponent {
  navigateToTalkScreen = () => {
    const { navigation } = this.props
    navigation.navigate('Talk')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>React Native Talk</Text>
        <TouchableOpacity onPress={this.navigateToTalkScreen}>
          <Text>Navigate to talk screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
