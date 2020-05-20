import { fromJS } from 'immutable';
import * as constants from './constants';
//immutable库

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
})

export default (state = defaultState, action) => {
    switch(action.type) {
      case constants.CHANGE_HOME_DATA:
        return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList)
        })
      case constants.ADD_ARTICLE_LIST:
        return state.merge({
          'articleList': state.get('articleList').concat(action.list),
          'articlePage': action.nextPage
        })
        // state.set('articleList', state.get('articleList').concat(action.list));
        // state.set('topList', fromJS(action.topicList))
      default:
          return state;
    }
}