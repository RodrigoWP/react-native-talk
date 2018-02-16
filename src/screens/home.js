import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../components'

class Home extends PureComponent {
  navigateToTalkScreen = () => {
    const { navigation } = this.props
    navigation.navigate('Talk')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.subtitle}>Learn once, write anywhere</Text>
        <Button
          label='Go to talk'
          onPress={this.navigateToTalkScreen}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },

  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#3b495e'
  },

  subtitle: {
    fontSize: 18,
    color: '#8cc152'
  }
})

export default Home
