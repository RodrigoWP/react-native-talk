import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { searchTopics } from '../../redux-flow/talk/action-creators'

class Talk extends PureComponent {
  componentDidMount () {
    const { searchTopics } = this.props
    searchTopics()
  }

  navigateToScreen = (screen) => {
    const { navigation } = this.props
    navigation.navigate(screen)
  }

  render () {
    const { topics } = this.props

    return (
      <View style={styles.container}>
        {topics.map((topic, index) => (
          <TouchableOpacity key={index} onPress={() => this.navigateToScreen(topic.screen)}>
            <Text>{topic.name}</Text>
          </TouchableOpacity>
        ))}
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

const mapStateToProps = ({ talk }) => talk

export default connect(mapStateToProps, { searchTopics })(Talk)
