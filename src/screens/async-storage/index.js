import React, { PureComponent } from 'react'
import { View, AsyncStorage, TextInput, StyleSheet, Dimensions, Text } from 'react-native'
import { Button } from '../../components'

const ITEM_STORAGE_KEY = 'ITEM_STORAGE_KEY'

class AsyncStorageExample extends PureComponent {
  state = {
    items: [],
    itemValue: ''
  }

  componentDidMount () {
    this.getItems()
  }

  saveItem = () => {
    const { itemValue } = this.state

    AsyncStorage.getItem(ITEM_STORAGE_KEY, (err, data) => {
      let items = data !== null ? JSON.parse(data) : []
      items.unshift(itemValue)

      AsyncStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(items), () => {
        this.setState({ items })
        this.clearItemValue()
      })
    })
  }

  getItems = () => {
    AsyncStorage.getItem(ITEM_STORAGE_KEY, (err, data) => {
      if (data === null) return

      const items = JSON.parse(data)

      this.setState({ items })
    })
  }

  handleChangeItemValue = (itemValue) => {
    this.setState({ itemValue })
  }

  clearItemValue = () => {
    this.setState({
      itemValue: ''
    })
  }

  render () {
    const { items, itemValue } = this.state

    return (
      <View style={styles.container}>
        <View>
          {items.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </View>
        <TextInput
          placeholder='Item'
          style={styles.textInput}
          value={itemValue}
          onChangeText={this.handleChangeItemValue}
        />
        <Button
          label='Save item'
          onPress={this.saveItem}
        />
      </View>
    )
  }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    marginTop: 20,
    height: 40,
    width: width - 30
  }
})

export default AsyncStorageExample
