import React from 'react'
import {Link,Redirect} from 'react-router-dom';
import '__Source/components/partnership/partnership.less';
import {PartnerService} from '__Source/components/partnership/partnership-service'
import {ROUTE_PATH, DetailNotExistsTxt} from '__Source/const';
import {CoreDataService} from '__Source/components/core-service/core-data-service';


export class PartnershipDetail extends React.Component {

    constructor({match}){
      super();
      this.state = {
        match: match,
        item: PartnerService.getItem(match.params.category, match.params.orgId)
      }
    }

    getPartnerDescription(){
      if(this.state.match.params && this.state.match.params.orgId){
        import('__Source/_generated_posts/'+this.state.match.params.orgId+'.js')
        .then(module => {
          this.setState({
            content: module.default.content
          })
        }).catch(err => {
          this.setState({
            isNotExists: true
          })
        })
      }
    }

    componentWillReceiveProps(props){
      this.setState({
        match: props.match,
        item: PartnerService.getItem(props.match.params.category, props.match.params.orgId)
      });
      this.getPartnerDescription();
    }

    componentDidMount(){
      this.getPartnerDescription();
    }

    render() {
        if(!CoreDataService.existsCategory(this.state.match.params.category)){
          return <Redirect to={{
            pathname: `/${ROUTE_PATH.coreService}/intermediary-org`
          }}/>
        }

        return <div className="partnership-detail">
          <div>
            <Link className="back" to={`/${ROUTE_PATH.coreService}/${this.state.match.params.category}`}>&lt; 返回</Link>
          </div>
          {
            this.state.item && <div>
              <img src={this.state.item.logo_hover} alt={this.state.item.key}/>
              <div dangerouslySetInnerHTML={{__html: this.state.content}} className="markdown-content"></div>
            </div>
          }{
            this.state.isNotExists && <p className="notExists">{DetailNotExistsTxt}</p>
          }
        </div>
        ;
    }
}
