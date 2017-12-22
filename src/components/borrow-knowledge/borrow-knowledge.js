import React from 'react'
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '__Source/components/borrow-knowledge/borrow-knowledge.less';

export class BorrowKnowledge extends React.Component {
  render() {
    return <div className="borrow-knowledge">
      <Row>
        {
          this.props.data.map((item,index) =><Col key={index} span={8}>
            <Link to={item.url}>{item.title}</Link>
          </Col>)
        }
      </Row>
    </div>
    ;
  }
}

BorrowKnowledge.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }))
};
