import React from 'react'
import PropTypes from 'prop-types';
import '__Source/components/meterials/meterials.less';
import {MerterialService} from '__Source/components/meterials/meterials-service';
import {ItemList} from '__Source/components/item-list/item-list';

export class MerterialKnowledge extends React.Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  componentWillReceiveProps(props){
    MerterialService.getAllArticle(props.category).then((data) => {
      this.setState({
        data: data
      })
    });
  }
  componentDidMount(){
    MerterialService.getAllArticle(this.props.category).then((data) => {
      this.setState({
        data: data
      })
    });
  }
  render() {
    return <div className="merterial-knowledge"><ItemList data={this.state.data}/></div>
    ;
  }
}

MerterialKnowledge.propTypes = {
  category: PropTypes.string,
};
