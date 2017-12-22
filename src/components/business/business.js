import React from 'react'
import {Link} from 'react-router-dom';
import { Row, Col, Tabs } from 'antd';
import '__Source/components/business/business.less';
import {Layout} from '__Source/components/layout/layout'
import {ROUTE_PATH} from '__Source/const';
import beian from '__Source/components/business/images/beian@2x.png';
import ebook from '__Source/components/business/images/ebook@2x.png';
import third from '__Source/components/business/images/third@2x.png';
import law from '__Source/components/business/images/law@2x.png';
import requirements from '__Source/components/business/images/requirements@2x.png';


const TabPane = Tabs.TabPane;

function callback(key) {

}

export class Business extends React.Component {

  constructor(){
    super();
    this.state = {
      activeTab: 'requirements'
    }
  }

  onClick = (tabName) => {
    this.setState({
      activeTab: tabName
    })
    console.log(this.state)
  }
  render() {
    return <Layout>
      <div className="business">
        <Row className="images">
          <Col className="item" span={4}><img src={requirements} onClick={()=>{this.onClick('requirements')}} alt=""/></Col>
          <Col className="item" span={4}><img src={beian} onClick={()=>{this.onClick('beian')}} alt=""/></Col>
          <Col className="item" span={4}><img src={ebook} onClick={()=>{this.onClick('ebook')}} alt=""/></Col>
          <Col className="item" span={4}><img src={third} onClick={()=>{this.onClick('third')}} alt=""/></Col>
          <Col className="item" span={4}><img src={law} onClick={()=>{this.onClick('law')}} alt=""/></Col>
        </Row>
        <Tabs activeKey={this.state.activeTab} animated={false} onChange={callback}>
          <TabPane forceRender={true} tab={<span>借贷需求登记</span>} key="requirements">
            <p>借贷需求登记即为出借人、借款人需求信息登记。原有传统的熟人经济模式拥有较多弊端，通过将借贷需求信息在线化，借助中心各项服务，能够使供求双方互相认可对方的条件，增加民间借贷信息的公开透明度，进而使借贷交易行为更加高效、安全、规范。借贷需求登记流程</p>
            <br/>
            <p>（出借人）: 注册/登录——<Link to={ROUTE_PATH.login}>点击借出</Link>——填写表单——点击提交——受理——查询结果</p>
            <br/>
            <p>（借款人）: 注册/登录——<Link to={ROUTE_PATH.login}>点击借入</Link>——填写表单——点击提交——受理——查询结果</p>
          </TabPane>
          <TabPane forceRender={true} tab={<span>借贷备案</span>} key="beian">
            <p>借贷备案即为借贷双方成交信息登记，包括个人对个人、个人对企业的借贷。当借贷双方在本中心外达成一致，在平台提交相关借贷证明材料审核后，即可在平台进行备案。<br/>
              通过借贷中心进行备案能够有效保障借贷双方利益，及时发现相关欺诈风险，使借款项目更加阳光、公开、规范。</p>
            <br/>
            <p>借贷备案流程： 借款人/出借人——<Link to={ROUTE_PATH.login}>点击备案</Link>——填写备案登记表——点击提交——受理审核——查询结果</p>
          </TabPane>
          <TabPane forceRender={true} tab={<span>电子存证</span>} key="ebook">
            <p>电子存证业务是大连民间借贷服务中心依据《合同法》、《电子签名法》的要求，为借贷双方提供电子合同、电子签章以及司法存证服务。电子合同与签章具有纸质合同等同的法律效力，基于先进的区块链技术，实现数据的分布式存储，确保合同及签名等信息无法篡改，满足司法存证要求，最大限度的保证了借贷交易的完整性、合法性、合规性。</p>
            <p>电子存证业务的开展有效化解借贷双方自证难题，提升签约效率，大幅减少人力、时间、金钱消耗，让双方权益得到最大保障。</p>
          </TabPane>
          <TabPane forceRender={true} tab={<span>第三方资信查询</span>} key="third">
            <p>第三方资信查询业务是大连民间借贷服务中心通过聚合市场上主流第三方数据源，基于机器学习算法构建全新信用模型，为出借人/金融机构提供借款人信用风险评估服务，杜绝恶意欺诈骗贷等非法行为，让老赖消失在萌芽状态，能够最大限度的保障出借人/金融机构的资金安全，进一步帮助大连的放贷人高效快速地筛选借款人。</p>
          </TabPane>
          <TabPane forceRender={true} tab={<span>法律咨询与支援</span>} key="law">
            <p>大连民间借贷服务中心与本地知名律师事务所建立战略合作关系，所属律师在经济合同纠纷、民间借贷纠纷等领域均具有丰富的行业经验，擅长通过诉讼和非诉讼方式帮助当事人解决争议问题，最大限度地维护当事人的合法权益。</p>
          </TabPane>
        </Tabs>
      </div>
    </Layout>
    ;
  }
}
