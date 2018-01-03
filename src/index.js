import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import '__Source/styles/global.less'
import {HomePage} from '__Source/pages/home';
import {ArticlePage} from '__Source/components/article-page/article-page';


ReactDOM.render(
      <Router>
        <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path={`/article/:articleId`} component={ArticlePage}/>
            <Route render={() => (
              <Redirect to={{
                  pathname: `/`
              }}/>
            )}/>
      </Switch>
    </div>
    </Router>,
    document.body.appendChild(document.getElementById('root'))
)
