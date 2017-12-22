import React from 'react';
import {Row, Col, Button, Menu, Icon, Dropdown, Carousel} from 'antd';
import {ReactModal} from "__Source/components/modal/modal";
import '__Source/components/loanChart/loanChart.less';
import daLianPic from '__Source/components/loanChart/images/da-lian-left.png';
import daLianRightPic from '__Source/components/loanChart/images/da-lian-right.png';
import quanGuoPic from '__Source/components/loanChart/images/quan-guo-left.png';
import quanGuoRightPic from '__Source/components/loanChart/images/quan-guo-right.png';

export class LoanChart extends React.Component {

    constructor(){
      super();
      this.state ={};
    }
    componentDidMount(){
      this.setState({
        type: this.props.type,
      });
    }

    componentWillReceiveProps(props){
      this.setState({
        type: props.type,
      });
    }
    showModal = (position) => {
        this.refs.chartModal.openModal();
        import(`./images/${this.state.type}-${position}-big.png`).then((module) => {
          this.setState({
            bigImage: module
          })
        })
    }
    showLeftModal = () => {
      this.showModal('left');
    }
    showRightModal = () => {
      this.showModal('right');
    }
    render() {
        let leftPic, rightPic;

        if(this.state){
          leftPic = (this.state.type === 'da-lian')?daLianPic:quanGuoPic;
          rightPic = (this.state.type === 'da-lian')?daLianRightPic:quanGuoRightPic;
        }
        return (
          <div>
            <ReactModal ref="chartModal" image={this.state.bigImage}/>
            <Row>
              <Col span={12}>
                <div className="loan-data-chart">
                  <img src={leftPic} onClick={this.showLeftModal} alt=""/>
                </div>
              </Col>
              <Col span={12}>
                <div className="loan-data-table">
                  <img src={rightPic} onClick={this.showRightModal} alt=""/>
                </div>
              </Col>
            </Row>
          </div>
        )
    }
}
