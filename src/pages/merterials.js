import React from 'react'
import {Footer} from '__Source/components/footer/footer'
import {Header} from '__Source/components/header/header'
import {Layout} from '__Source/components/layout/layout'
import {Toolbar} from '__Source/components/tool-bar/tool-bar'
import {Meterials} from '__Source/components/meterials/meterials'
import {ROUTE_PATH} from '__Source/const';

export class MerterialsPage extends React.Component {

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
      <Header className="black" selected={ROUTE_PATH.merterials}/>
      <Meterials url={this.state.url}/>
      <Footer type="gray"/>
    </div>
    ;
  }
}
