import
{
  ADD_NEW_ENTRY
} from '../actions/types';

const initialState = {
  entry: {}
};

function addEntry(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NEW_ENTRY:
      return {
        ...state,
        entry: action.payload,
      };
    default:
      return state;
  }
}

export default addEntry;
