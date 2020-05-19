import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <TopicWrapper>
          {
            list.map((item) => {
              return (
                <TopicItem key={item.get('id')}>
                  <img 
                    className='topic-pic'
                    src={item.get('imgUrl')}
                  />
                  {item.get('title')}
                </TopicItem>
              )
            })
          }
        </TopicWrapper>
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
});

export default connect(mapState, null)(Topic);