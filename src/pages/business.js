import React from 'react'
import {Footer} from '__Source/components/footer/footer'
import {Header} from '__Source/components/header/header'
import {Layout} from '__Source/components/layout/layout'
import {Toolbar} from '__Source/components/tool-bar/tool-bar'
import {Business} from '__Source/components/business/business'
import {ROUTE_PATH} from '__Source/const';

export class BusinessPage extends React.Component {

  render() {
    return <div>
      <Layout>
        <Toolbar/>
      </Layout>
      <Header className="black" selected={ROUTE_PATH.business}/>
      <Business />
      <Footer type="gray"/>
    </div>
    ;
  }
}
