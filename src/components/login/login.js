import React from 'react';
import {Checkbox} from 'antd';
import {Link} from 'react-router-dom';
import '__Source/components/login/login.less';

export class Login extends React.Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-module">
                    <div>
                        <label>用户名：</label>
                        <input type="text" placeholder="请输入您的用户名"/>
                    </div>
                    <div>
                        <label>密码：</label>
                        <input type="password" placeholder="请输入您的密码"/>
                    </div>
                    <Checkbox>记住用户名</Checkbox>
                    <button className="login-btn">登录</button>
                    <div className="tip">
                        <p>如果您还不是我们的会员，请先<Link to="/register" className="tip-keyword">注册</Link>！</p>
                        {/*<p>如果您忘记了密码，请<span className="tip-keyword">找回密码</span></p>*/}
                    </div>
                </div>
            </div>
        )
    }
}