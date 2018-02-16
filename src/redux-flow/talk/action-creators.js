import { SEARCH_TOPICS } from './actions'

const topicsMock = [
  {
    name: 'AsyncStorage',
    screen: 'AsyncStorage'
  },
  {
    name: 'Style and Layout',
    screen: 'StyleLayout'
  },
  {
    name: 'Recursos Nativos',
    screen: 'NativeResources'
  }
]

export const searchTopics = () => {
  return { type: SEARCH_TOPICS, payload: topicsMock }
}
