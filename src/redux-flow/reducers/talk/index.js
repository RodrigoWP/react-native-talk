import { SEARCH_TOPICS } from './actions'

const initialState = {
  topics: []
}

const talk = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TOPICS:
      return {
        ...state,
        topics: action.payload
      }
  }

  return state
}

export default talk
