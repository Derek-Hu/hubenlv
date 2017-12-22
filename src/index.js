import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import 'normalize.css'
import '__Source/styles/global.less'
// import {BusinessPage} from '__Source/pages/business';
import {HomePage} from '__Source/pages/home';
// import {NewsPage} from '__Source/pages/news';
// import {CoreServicePage} from '__Source/pages/core-service';
// import {MerterialsPage} from '__Source/pages/merterials';
// import {AboutUsPage} from '__Source/pages/about-us';
// import {RegisterPage} from '__Source/pages/register';
// import {LoginPage} from '__Source/pages/login';
import {ROUTE_PATH} from '__Source/const';

ReactDOM.render(
      <Router>
        <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path={`/${ROUTE_PATH.home}`} component={HomePage}/>
            {/* <Route path={`/${ROUTE_PATH.business}`} component={BusinessPage}/>
            <Route path={`/${ROUTE_PATH.news}`} component={NewsPage}/>
            <Route path={`/${ROUTE_PATH.coreService}`} component={CoreServicePage}/>
            <Route path={`/${ROUTE_PATH.merterials}`} component={MerterialsPage}/>
            <Route path={`/${ROUTE_PATH.aboutUs}`} component={AboutUsPage}/>
            <Route path={`/${ROUTE_PATH.register}`} component={RegisterPage}/>
            <Route path={`/${ROUTE_PATH.login}`} component={LoginPage}/> */}
            <Route render={() => (
              <Redirect to={{
                  pathname: `/${ROUTE_PATH.home}`
              }}/>
            )}/>
      </Switch>
    </div>
    </Router>,
    document.body.appendChild(document.getElementById('root'))
)
