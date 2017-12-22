import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import { Menu} from 'antd';
import '__Source/components/side-menu/side-menu.less';

export class SideMenu extends React.Component {

  static propTypes = {
    rootMenus: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      subMenus: PropTypes.bool
    })),
    width: PropTypes.number,
    onClick: PropTypes.func
  }

  onClick = ({item, key, keyPath }) => {
    this.props.onClick && this.props.onClick(item, key, keyPath);
  }

  render() {
    return <div className="side-menu" style={{ width: this.props.width }}>
      <Menu
        mode="inline"
        onClick={this.onClick}
        style={{ width: this.props.width }}
      >
        {
          this.props.rootMenus.map(menu => <Menu.Item className={classNames({subMenus: menu.subMenus})} key={menu.key}>
            <NavLink activeClassName="side-menu-active" to={menu.url}><span>{menu.title}</span></NavLink>
        </Menu.Item>
        )
      }
      </Menu>
    </div>
    ;
  }
}
