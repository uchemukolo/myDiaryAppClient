import
{
  GET_PROFILE,
  GET_ENTRIES,
} from '../actions/types';

const initialState = {
  profile: {
    date: '',
    title: '',
    mood: '',
    entry: ''
  },
  isLoading: true
};

function getProfileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PROFILE:
    case GET_ENTRIES:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export default getProfileReducer;
