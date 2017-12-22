import React from 'react';
import './dynamicInfoAbstract.less';
import logo from './images/业界资讯@2x.png';

export class DynamicInfoAbstract extends React.Component{

    constructor(){
      super()
      this.state = {};
    }
    componentWillReceiveProps(props){
      if(props.item.contentUrl){

      import('__Source/_generated_posts/'+props.item.contentUrl)
        .then(module => {
          if(module.default.content){
            this.setState({
              content: module.default.content.substring(0, 100) + '...'
            })
          }
        })
      }
    }

    componentDidMount(){
    }

    render(){
        return(
              <div className="info-abstract">
                    <img src={this.props.item.bannerImage} alt=""/>
                    <h3>{this.props.item.title}</h3>
                    <p className="describe"  dangerouslySetInnerHTML={{__html: this.state.content}}></p>
                    <p className="describe-date">{this.props.item.date}</p>
              </div>
        )
    }
}
