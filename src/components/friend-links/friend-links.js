import React from 'react'
import PropTypes from 'prop-types';
import '__Source/components/friend-links/friend-links.less';

export class FriendLinks extends React.Component {
  render() {
    return <div className="friend-links"><ul>
      {
        this.props.data.map((link, index) => <li key={link.name+'-'+index}>
          {/* <a href={link.url}>{link.name}</a> */}
          <a>{link.name}</a>
        </li>)
      }
    </ul></div>
    ;
  }
}

FriendLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }))
};
