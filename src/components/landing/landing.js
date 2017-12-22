import React from 'react'
import {Row, Col} from 'antd';
import {Layout} from '__Source/components/layout/layout';
import '__Source/components/landing/landing.less';
import lawImage from '__Source/components/landing/images/law@2x.png';
import guideImage from '__Source/components/landing/images/guide@2x.png';
import servicesImage from '__Source/components/landing/images/services@2x.png';
import marketImage from '__Source/components/landing/images/market@2x.png';
import textImage from '__Source/components/landing/images/text@2x.png';

export class Landing extends React.Component {
    render() {
        return <div className="landing">
            <div className="lp-title">
                <div className="title">
                  <h2>大连民间借贷中心</h2>
                  <h3>为民间借贷活动提供电子化高科技服务的平台</h3>
                </div>
               <img src={textImage} alt=""/>
            </div>
            <Layout>
                <Row className="ads">
                    <Col span={6}>
                        <img src={guideImage} alt=""/>
                        <h4>政府引导</h4>
                    </Col>
                    <Col span={6}>
                        <img src={servicesImage} alt=""/>
                        <h4>服务高效</h4>
                    </Col>
                    <Col span={6}>
                        <img src={lawImage} alt=""/>
                        <h4>合法合规</h4>
                    </Col>
                    <Col span={6}>
                        <img src={marketImage} alt=""/>
                        <h4>市场运作</h4>
                    </Col>
                </Row>
            </Layout>
        </div>
            ;
    }
}
