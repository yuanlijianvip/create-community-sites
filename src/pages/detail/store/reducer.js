import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: '123',
  content: '<h5>567</h5>'
})

export default (state = defaultState, action) => {
    switch(action.type) {
      case constants.CHANGE_DETAIL:
        return state.merge({
          title: action.title,
          content: action.content
        })
      default:
          return state;
    }
}