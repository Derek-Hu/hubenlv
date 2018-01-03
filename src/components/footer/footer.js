import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import '__Source/components/footer/footer.less';

export class Footer extends React.Component {

  render() {
    return <div className={classNames('footer', this.props.type || 'white')}>
      <Row>
        <Col span={24}>
            <p>版权所有 沪ICP备17050690号</p>
            <p>Copyright&copy;2018.All Right Reserved</p>
        </Col>
      </Row>
    </div>
    ;
  }
}

Footer.propTypes = {
  type: PropTypes.string
};
