import React from 'react'
import {Footer} from '__Source/components/footer/footer'
import {Header} from '__Source/components/header/header'
import {Layout} from '__Source/components/layout/layout'
import {Toolbar} from '__Source/components/tool-bar/tool-bar'
import {CoreService} from '__Source/components/core-service/core-service'
import {ROUTE_PATH} from '__Source/const';

export class CoreServicePage extends React.Component {

  constructor({match}){
    super();
    this.state={
      url: match.url
    }
  }
  render() {
    return <div>
      <Layout>
        <Toolbar/>
      </Layout>
      <Header className="black" selected={ROUTE_PATH.coreService}/>
      <CoreService url={this.state.url}/>
      <Footer type="gray"/>
    </div>
    ;
  }
}
