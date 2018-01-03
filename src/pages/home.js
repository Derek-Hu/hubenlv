import React from 'react'
import {Footer} from '__Source/components/footer/footer'
import {Header} from '__Source/components/header/header'
import {Layout} from '__Source/components/layout/layout'
import {Toolbar} from '__Source/components/tool-bar/tool-bar'
import {Home} from '__Source/components/home/home'
import {ROUTE_PATH} from '__Source/const';

export class HomePage extends React.Component {

  render() {
    return <div>
      <Header className="black" selected={ROUTE_PATH.home}/>
      <Layout>
        <Home />
      </Layout>
      <Footer type="gray"/>
    </div>
    ;
  }
}
