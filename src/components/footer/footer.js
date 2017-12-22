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
            <p>免费服务热线：400-123-1234 大连市民间借贷服务有限公司 版权所有 辽ICP备12345678号</p>
            <p>Copyright&copy;2017.All Right Reserved</p>
        </Col>
      </Row>
    </div>
    ;
  }
}

Footer.propTypes = {
  type: PropTypes.string
};
