import React from 'react'
import {Link} from 'react-router-dom';
import '__Source/components/news/news.less';
import {MerterialService} from '__Source/components/meterials/meterials-service';
import {ROUTE_PATH, DetailNotExistsTxt} from '__Source/const';

export class MeterialsDetail extends React.Component {

    constructor({match}){
      super();
      this.state = {
        match: match
      }
      this.loadContent(match.params.articleId);
    }

    componentWillReceiveProps(props){
      this.setState({
        match: props.match
      });
      this.loadContent(props.match.params.articleId);
    }

    loadContent(articleId){

      MerterialService.getArticle(articleId).then((article) => {
        this.setState({
          article: article
        })
        if(article){
          import('__Source/_generated_posts/'+article.contentUrl)
          .then(module => {
            this.setState({
              content: module.default.content
            })
          });
        }else{
          this.setState({
            isNotExists: true
          })
        }
      });

    }

    render() {
        const backCategory = this.props.location.search.indexOf('backCategory')!==-1;

        return <div className="news-detail">
          <div>
            <Link className="back" to={`/${ROUTE_PATH.merterials}${backCategory?'/knowledge/all':'/knowledge/'+this.state.match.params.category}`}>&lt; 返回</Link>
          </div>
          {
            this.state.article && <div>
              <h1>{this.state.article.title}</h1>
              <div className="content markdown-content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </div>
          }{
            this.state.isNotExists && <p className="notExists">{DetailNotExistsTxt}</p>
          }
        </div>
        ;
    }
}
