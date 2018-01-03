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
        
    </div>;
  }
}

Header.propTypes = {
  selected: PropTypes.string,
  style: PropTypes.string
};
