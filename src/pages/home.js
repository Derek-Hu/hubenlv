import React from 'react'
import {Link} from 'react-router-dom';
import {POSTS} from '__Source/common/meta';

console.log(POSTS);

export class HomePage extends React.Component {

  render() {
    return <div><ul>
      {
        POSTS.javascript && POSTS.javascript.map((item, index) => <li key={index}><Link to={`/article/${item.contentUrl}`}>{item.id}</Link></li>)
      }
    </ul></div>
    ;
  }
}
