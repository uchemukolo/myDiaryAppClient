import
{
  GET_ENTRIES,
  IS_LOADING,
  GET_ENTRIES_ERROR
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
        isLoading: false
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_ENTRIES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}

export default getEntries;
