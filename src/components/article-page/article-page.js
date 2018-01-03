import React from 'react'
import {Link} from 'react-router-dom';
import {DetailNotExistsTxt} from '__Source/const';

export class ArticlePage extends React.Component {

    constructor({match}){
      super();
      this.state = {
        match: match
      };
    }

    componentDidMount(){
      this.loadContent(this.state.match.params.articleId);
    }
    componentWillReceiveProps(props){
      this.loadContent(props.match.params.articleId);
    }

    loadContent(articleId){
      if(articleId){
        import('__Source/_generated_posts/'+articleId)
        .then(module => {
          this.setState({
            content: module.default.content
          })
        }).catch(err => {
          this.setState({
            isNotExists: true
          })
        });
      }else{
        this.setState({
          isNotExists: true
        })
      }
    }

    render() {
        return <div className="news-detail">
              <div className="content markdown-content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
              {
                  this.state.isNotExists && <p className="notExists">{DetailNotExistsTxt}<br/><Link to="/">返回</Link></p>
              }
        </div>
        ;
    }
}
