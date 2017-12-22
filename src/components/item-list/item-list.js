import React from 'react'
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '__Source/components/item-list/item-list.less';

export class ItemList extends React.Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      date: PropTypes.string,
    })),
    backCategory: PropTypes.bool,
    threeCol: PropTypes.bool
  }
  
  render() {
    return <div className={classNames('item-list',{'threeCol': this.props.threeCol})}>
      <ul>
        {
          this.props.data && this.props.data.map((item, index) =><li key={index} >
            <Link to={`${item.url}`}>
              <span className="category">{item.category && `[${item.category}]  `}</span>
              <span className="title">{item.title}</span>
              <span className="date">{item.date}</span>
            </Link>
          </li>)
        }
      </ul>
    </div>
    ;
  }
}
