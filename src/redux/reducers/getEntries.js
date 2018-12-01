import
{
  GET_ENTRIES,
  IS_LOADING
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
    default:
      return state;
  }
}

export default getEntries;
