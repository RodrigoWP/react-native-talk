import { SEARCH_TOPICS } from './actions'

const topicsMock = [
  {
    name: 'AsyncStorage',
    screen: 'AsyncStorage'
  },
  {
    name: 'Style and Layout',
    screen: 'StyleLayout'
  }
]

export const searchTopics = () => {
  return { type: SEARCH_TOPICS, payload: topicsMock }
}
