import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { searchTopics } from '../../redux-flow/reducers/talk/action-creators'

class Talk extends PureComponent {
  componentDidMount () {
    const { searchTopics } = this.props
    searchTopics()
  }

  render () {
    const { topics } = this.props

    return (
      <View style={{ flex: 1 }}>
        {topics.map((topic, index) => (
          <Text key={index}>{topic.name}</Text>
        ))}
      </View>
    )
  }
}

const mapStateToProps = ({ talk }) => talk

export default connect(mapStateToProps, { searchTopics })(Talk)
