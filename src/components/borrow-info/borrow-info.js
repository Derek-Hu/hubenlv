import React from 'react'
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import '__Source/components/borrow-info/borrow-info.less';

export class BorrowInfo extends React.Component {
  render() {
    return <div className="borrow-info">
      <Row><Col span={12}>
      {/* show borrow in data */}
      <table>
        <thead><tr><th>借入人</th><th>联系电话</th><th>所在区域</th><th>金融(万元)</th><th>最低月利率</th><th>期限(月)</th></tr></thead>
        <tbody>
        {
          this.props.in.map((item, index) => <tr key={item.id+'-'+index}>
            <td>{item.username}</td>
            <td>{item.phone}</td>
            <td>{item.location}</td>
            <td>{item.amount}</td>
            <td>{item.rate}</td>
            <td>{item.duration}</td>
          </tr>)
        }
        </tbody></table>
      </Col><Col span={12}>
        {/* show borrow out data */}
        <table>
          <thead><tr><th>借出人</th><th>联系电话</th><th>所在区域</th><th>金融(万元)</th><th>最低月利率</th><th>期限(月)</th></tr></thead>
          <tbody>
          {
            this.props.out.map((item, index) => <tr key={item.id+'-'+index}>
              <td>{item.username}</td>
              <td>{item.phone}</td>
              <td>{item.location}</td>
              <td>{item.amount}</td>
              <td>{item.rate}</td>
              <td>{item.duration}</td>
            </tr>)
          }
          </tbody></table>
      </Col></Row>
    </div>
    ;
  }
}

BorrowInfo.propTypes = {
  in: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    amount: PropTypes.number,
    rate: PropTypes.string,
    duration: PropTypes.number
  })),
  out: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    amount: PropTypes.number,
    rate: PropTypes.string,
    duration: PropTypes.number
  }))
};
