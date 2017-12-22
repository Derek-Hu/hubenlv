import React from 'react';
import {Link} from 'react-router-dom';
import '__Source/components/register/register.less'

export class Register extends React.Component {
    render() {
        return (
            <div className="register-page">
                <div className="register-module">
                    <div>
                        <label>用户名：</label>
                        <input type="text" placeholder="4-20字符，可由中文 英文 数字组成"/>
                    </div>
                    <div>
                        <label>注册邮箱：</label>
                        <input type="text" placeholder="请填写正确的邮箱，以便于来完成注册"/>
                    </div>
                    <div>
                        <label>注册密码：</label>
                        <input type="password" placeholder="密码需由6-20个字符组成"/>
                    </div>
                    <div>
                        <label>密码确认：</label>
                        <input type="password" placeholder="请再次输入您的密码"/>
                    </div>
                    <div>
                        <label>用户类型：</label>
                        <input type="text" placeholder="请填写您的注册类型"/>
                    </div>
                    <div>
                        <label>验证码：</label>
                        <input type="text" placeholder="请填写验证码"/>
                    </div>
                    <div>
                        <button className="register-btn">注册</button>
                    </div>
                    <div className="login-link"><Link to="/login" className="login">登录</Link></div>
                </div>
            </div>
    );
    }
    }