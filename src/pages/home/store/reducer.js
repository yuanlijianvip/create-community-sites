import { fromJS } from 'immutable';
import * as contants from './constants';
//immutable库

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
      case contants.CHANGE_HOME_DATA:
        return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList)
        })
        // state.set('topList', fromJS(action.topicList))
      default:
          return state;
    }
}