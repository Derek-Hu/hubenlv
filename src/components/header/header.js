import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Menu } from 'antd';
import {Layout} from '__Source/components/layout/layout';
import '__Source/components/header/header.less';
import {ROUTE_PATH} from '__Source/const';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.selected
    };
  }
  handleClick = (e) => {
  }

  render() {
    return <div className={classNames('header', this.props.className)}>
        <Layout>
          <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal">
            <Menu.Item key="home"><Link to={`/${ROUTE_PATH.home}`}>首 页</Link></Menu.Item>
            <Menu.Item key={ROUTE_PATH.business}><Link to={`/${ROUTE_PATH.business}`}>业务介绍</Link></Menu.Item>
            <Menu.Item key={ROUTE_PATH.news}><Link to={`/${ROUTE_PATH.news}`}>资讯动态</Link></Menu.Item>
            <Menu.Item key={ROUTE_PATH.coreService}><Link to={`/${ROUTE_PATH.coreService}`}>中心服务</Link></Menu.Item>
            <Menu.Item key={ROUTE_PATH.merterials}><Link to={`/${ROUTE_PATH.merterials}`}>常用资料</Link></Menu.Item>
            <Menu.Item key={ROUTE_PATH.aboutUs}><Link to={`/${ROUTE_PATH.aboutUs}`}>关于我们</Link></Menu.Item>
          </Menu>
        </Layout>
    </div>;
  }
}

Header.propTypes = {
  selected: PropTypes.string,
  style: PropTypes.string
};
