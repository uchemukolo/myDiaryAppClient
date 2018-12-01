import
{
  GET_ENTRIES,
} from '../actions/types';

const initialState = {
  entry: {},
  isLoading: false
};

function getEntries(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
        entry: action.payload,
        isLoading: true
      };
    default:
      return state;
  }
}

export default getEntries;
