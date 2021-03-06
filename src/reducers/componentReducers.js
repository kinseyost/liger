import Immutable from 'immutable';
import { SHOW_NOTIFICATION } from 'constants/componentConstants.js';

export default function componentReducers(state = Immutable.Map(), action) {
  const { msg, shown, status } = action;
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return state.setIn(['Notification'], Immutable.fromJS({ msg, shown, status }));
    default:
      return state;
  }
}
