import
{
  UPDATE_ENTRY,
  GET_ENTRY_DETAILS,
} from '../actions/types';

const initialState = {
  entry: {
    entry: {
      date: '',
      title: '',
      mood: '',
      entry: ''
    }
  },
  isLoading: true
};

function getEntryDetailReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ENTRY_DETAILS:
    case UPDATE_ENTRY:
      return {
        ...state,
        entry: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export default getEntryDetailReducer;
