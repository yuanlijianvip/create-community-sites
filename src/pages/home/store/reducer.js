import { fromJS } from 'immutable';
//immutable库

const defaultState = fromJS({
  topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	},{
		id: 2,
		title: '手绘',
		imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
		id: 1,
		title: '晶圆代工市场2020年产值增幅预估为5%～9%',
		desc: '今日，OPPO与沃达丰联合宣布，双方签订合作协议，建立全面合作关系，OPPO的全线手机产品将从5月起进入沃达丰欧洲市场。（鞭牛士）',
		imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg'
	},{
		id: 2,
		title: '晶圆代工市场2020年产值增幅预估为5%～9%',
		desc: '今日，OPPO与沃达丰联合宣布，双方签订合作协议，建立全面合作关系，OPPO的全线手机产品将从5月起进入沃达丰欧洲市场。（鞭牛士）',
		imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg'
	},{
		id: 3,
		title: '晶圆代工市场2020年产值增幅预估为5%～9%',
		desc: '今日，OPPO与沃达丰联合宣布，双方签订合作协议，建立全面合作关系，OPPO的全线手机产品将从5月起进入沃达丰欧洲市场。（鞭牛士）',
		imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg'
	},{
		id: 4,
		title: '晶圆代工市场2020年产值增幅预估为5%～9%',
		desc: '今日，OPPO与沃达丰联合宣布，双方签订合作协议，建立全面合作关系，OPPO的全线手机产品将从5月起进入沃达丰欧洲市场。（鞭牛士）',
		imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg'
  }],
  recommendList: [{
		id: 1,
		imgUrl: "http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg"
	}, {
		id: 2,
		imgUrl: "http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg"
	}]
})

export default (state = defaultState, action) => {
    switch(action.type) {
      
        default:
            return state;
    }
}