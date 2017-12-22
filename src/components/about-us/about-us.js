import React from 'react'
import {Row, Col} from 'antd';
import {Layout} from '__Source/components/layout/layout';
import {SectionTitle} from '__Source/components/section-title/section-title';
import {Partnership} from '__Source/components/partnership/partnership';
import {PartnerService} from '__Source/components/partnership/partnership-service';
import '__Source/components/about-us/about-us.less';

export class AboutUs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            parterns: PartnerService.getPartners()
        }
    }

    render() {
        return (
            <div className="about-us-moudle">
                <div className="about-us-top">
                    <div className="about-us-describe">
                        <p>大连市民间借贷服务中心是在大连市政府、大连市金融办公室（机构名称）指导下成立的民间融资公共服务机构，于2017年12月正式成立。本中心将在法律和政策允许范围内，为民间借贷双方提供借贷信息登记、资产评估、风险识别和管理、电子存证、银行托管、信用评价和法律咨询等综合性金融服务，为大连民间借贷行为搭建起合法、规范、公平、透明、安全的金融服务平台。</p><br/>
                        <p>本中心将坚持政府引导，市场化运作，致力于规范民间借贷市场，解决中小企业融资难融资成本高的困局，减少非法融资现象，防范民间金融系统性风险，引导民间资本合法有序地进入实体小微企业，促进大连金融产业健康发展。</p>
                    </div>
                </div>
                <Layout>
                    <SectionTitle title="中心优势"/>
                    <Row className="center-advantages">
                        <Col span={12} className="advantage-tech">
                            <h4>技术实力更先进</h4>
                            <p className="advantage-content">本中心依托于点融科技完善的金融科技基础设施和研发实力，在资金资产管理、支付交易、大数据决策等方面尤其是区块链技术能力上拥有深厚的沉淀，能够快速搭建和部署完整的金融平台，灵活方便扩展，并保持较快的迭代速度，持续发挥技术实力优势，能够有效解决大连民间借贷市场的现有问题，并使之更加科技化、标准化、透明化。</p>
                        </Col>
                        <Col span={12} className="advantage-service second-col">
                            <h4>服务更完善高效</h4>
                            <p className="advantage-content">本中心提供统一的第三方数据服务接入，电子存证、公证、司法服务、大数据风控服务等，配合入驻的本地配套机构，能够快速高效的帮助传统金融机构或个人在线完成借贷业务，整体流程更加高效、透明、公正、安全。</p>
                        </Col>
                        <Col span={12} className="second-row advantage-law">
                            <h4>风控手段更有效</h4>
                            <p className="advantage-content">金融机构或个人可以充分利用本中心提供的第三方数据服务和点融反欺诈引擎，快速有效的甄别借款人/资产的优劣，有效杜绝骗贷、经济诈骗等行为。相对于传统的风控手段，本中心风控措施维度更广更全面，大大节省相关的工作成本，资金下放更安全放心。</p>
                        </Col>
                        <Col span={12} className="second-row advantage-market second-col">
                            <h4>资本流通更充分</h4>
                            <p className="advantage-content">本中心能够实现大连地区资金和资产的高效撮合，金融机构既可以选择OTC模式自行对资产进行放款，也可以通过本中心录入来进行匹配，能够充分流转闲散资金 ，挖掘优质资产，让资金和资产实现快速匹配，丰富金融机构收入来源，实现民间资本的良性有序流动，构建稳定发展、健康向上的金融借贷市场。</p>
                        </Col>
                    </Row>
                    <SectionTitle title="服务宗旨"/>
                    <div className="service-aims">
                      <p>大连民间借贷服务中心除了提供规范的借贷登记、备案、电子存证等服务外，还会借助本地律师事务所、公证处、融资性担保公司等一系列专业机构就民间借贷的合法性和风险把控形成配套服务体系，以此尽量减少借贷双方的法律纠纷和借贷风险。<br/>
                      ①服务中心会对入驻该中心的中介机构、配套机构进行资格审查和日常管理<br/>
                      ②中介机构在进行资金配对时，需要协助资金借出方对资金借入方进行必要的资格审查，防止借贷用途违法违规。<br/>
                      ③中心对资金规模、流向进行监管防控，设定风险提示和预警信号，并定期梳理信用不良企业及自然人名单并公布。<br/>
                      </p>
                      <br/>
                      <p>通过政府引导、市场运作、借贷自愿的原则，大连民间借贷服务中心不仅能够及时了解和掌握民间资金动向，防范和化解民间金融风险，还可以有效弥补中小企业金融服务不完善的问题，对解决民间资金多而投资难、中小企业多而融资难（“两多两难”）问题具有极大促进作用，促使民间借贷行为阳光化、合法化，积极推进大连经济的健康发展。</p>
                    </div>
                    <SectionTitle title="合作伙伴"/>
                    <Partnership data={this.state.parterns}/>
                </Layout>
            </div>
        );
    }
}
