import React from 'react'
import {BeianService} from '__Source/components/beian/beian-service'
import '__Source/components/beian/beian.less';

export class Beian extends React.Component {

  constructor(){
    super();
    this.state = {
      data:{}
    }
  }

  componentDidMount(){
    BeianService.getData().then((data) => {
      this.setState({
        data: data
      })
    });
  }

  render() {
    return <div className="beian">
      <ul>
        <li><p>本周备案笔数：{this.state.data.countThisWeek}笔</p></li>
        <li><p>累计备案笔数：{this.state.data.totalCount}笔</p></li>
        <li><p>本周备案金额：{this.state.data.amountThisWeek}万元</p></li>
        <li><p>累计备案金额：{this.state.data.totalAmount}亿</p></li>
        <li><p>本周借入登记笔数：{this.state.data.inCountThisWeek}笔</p></li>
        <li><p>本周借出登记笔数：{this.state.data.outCountThisWeek}笔</p></li>
      </ul>
      <div className="bar">
        <span className="value">{this.state.data.avgRate}</span><span className="unit">%</span><p>平均借款利率</p></div>
    </div>
    ;
  }
}
