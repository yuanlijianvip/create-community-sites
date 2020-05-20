import { fromJS } from 'immutable';
//immutable库

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
      case 'change_home_data':
        return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList)
        })
        // state.set('topList', fromJS(action.topicList))
        console.log(action);
      default:
          return state;
    }
}