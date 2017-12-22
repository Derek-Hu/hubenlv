import React from 'react'
import {Footer} from '__Source/components/footer/footer'
import {Header} from '__Source/components/header/header'
import {Layout} from '__Source/components/layout/layout'
import {Toolbar} from '__Source/components/tool-bar/tool-bar'
import {AboutUs} from '__Source/components/about-us/about-us'
import {ROUTE_PATH} from '__Source/const';

export class AboutUsPage extends React.Component {

  render() {
    return <div>
      <Layout>
        <Toolbar/>
      </Layout>
      <Header className="black" selected={ROUTE_PATH.aboutUs}/>
      <AboutUs />
      <Footer type="gray"/>
    </div>
    ;
  }
}
