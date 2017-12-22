import React from 'react'
import PropTypes from 'prop-types';
import '__Source/components/meterials/meterials.less';
import {NewsService} from '__Source/components/news/news-service'
import {ItemList} from '__Source/components/item-list/item-list';

export class NewsList extends React.Component {

  static propTypes = {
    category: PropTypes.string,
  }

  constructor(){
    super();
    this.state={
      data: []
    }
  }
  componentWillReceiveProps(props){
    NewsService.getAllArticle(props.category).then((data) => {
      this.setState({
        data: data
      })
    });
  }
  componentDidMount(){
    NewsService.getAllArticle(this.props.category).then((data) => {
      this.setState({
        data: data
      })
    });
  }
  render() {
    return <ItemList data={this.state.data}/>
    ;
  }
}
