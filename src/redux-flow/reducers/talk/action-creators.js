import { SEARCH_TOPICS } from './actions'

const topicsMock = [
  {
    name: 'Topic 1'
  },
  {
    name: 'Topic 2'
  },
  {
    name: 'Topic 3'
  }
]

export const searchTopics = () => {
  return { type: SEARCH_TOPICS, payload: topicsMock }
}
