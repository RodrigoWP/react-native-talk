import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'

const Button = ({ onPress, label }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={onPress}
    underlayColor='#afcef3'>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableHighlight>
)

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  button: {
    width: width - 30,
    height: 40,
    backgroundColor: '#6197c6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    borderRadius: 2
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export { Button }
