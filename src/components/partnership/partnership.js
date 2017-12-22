import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PartnerService} from '__Source/components/partnership/partnership-service'
import {CoreDataService} from '__Source/components/core-service/core-data-service';
import '__Source/components/partnership/partnership.less';
import {ROUTE_PATH} from '__Source/const';

export class Partnership extends React.Component {
    constructor(props) {
        super(props);

        const item = CoreDataService.getItem(this.props.category);
        this.state = {
            hoverItem: null,
            data: this.props.category?PartnerService.getCategories(this.props.category):PartnerService.getPartners(),
            title: this.props.category && item? item.title :''
        };

        this.disappearHoverLogo = this.disappearHoverLogo.bind(this);
    }

    componentWillReceiveProps(props){
      const item = CoreDataService.getItem(props.category);

      this.setState({
        data: props.category?PartnerService.getCategories(props.category):PartnerService.getPartners(),
        title: props.category && item? item.title :''
      });
    }

    componentDidMount(){

    }

    showHoverLogo(item) {
        this.setState({
            hoverItem: item
        })
    }

    disappearHoverLogo(){
        this.setState({
            hoverItem: null
        })
    }

    render() {
        return <div className="partnership">
           {
             this.props.detail? <div className="detail-title">
               <h3>{this.state.title}</h3>
             </div> :null
           }
            <table>
                <tbody className={classNames({'detail-view': this.props.detail})}>
                {
                    this.state.data && this.state.data.map((partern, index) => <tr key={partern.type + '-' + index}>
                        {
                          this.props.detail? null: <td className="title"><h5>{partern.type}</h5></td>
                        }
                        <td className="list">
                            <dl>
                                <dt>{partern.type}</dt>
                                {partern.parterns && partern.parterns.map((item, index) => <dd key={item.logo + '-' + index}>
                                    <Link to={`/${ROUTE_PATH.coreService}/${partern.key}/${item.id}`}><img src={item === this.state.hoverItem ? item.logo_hover : item.logo}
                                                            onMouseOver={() => this.showHoverLogo(item)}
                                                            alt={item.key}
                                                            onMouseOut={this.disappearHoverLogo}/></Link>
                                </dd>)}
                            </dl>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
            ;
    }
}

Partnership.propTypes = {
    category: PropTypes.string,
    detail: PropTypes.bool
};
