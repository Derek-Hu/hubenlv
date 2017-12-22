import React from 'react'
import {Row, Col} from 'antd';
import '__Source/components/tool-bar/tool-bar.less';
import logoImage from '__Source/components/tool-bar/images/logo@2x.png';
import {Link} from 'react-router-dom';

export class Toolbar extends React.Component {
    render() {
        return <div className="tool-bar">
            <Row className="logo">
                <Col span={24}><img src={logoImage} alt=""/></Col>
            </Row>
            <Row className="sign-in">
                <Col span={12}><Link to="/login">登录</Link></Col>
                <Col span={12}><Link to="/register">注册</Link></Col>
            </Row>
        </div>
            ;
    }
}
