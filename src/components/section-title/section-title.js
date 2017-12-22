import React from 'react'
import { Row } from 'antd';
import PropTypes from 'prop-types';
import '__Source/components/section-title/section-title.less';

export class SectionTitle extends React.Component {
  render() {
    return <Row className="section-title">
        <h3>{this.props.title}<span>{this.props.subTitle}</span></h3>
        {this.props.children}
    </Row>
    ;
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};
