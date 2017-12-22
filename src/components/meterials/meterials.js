import React from 'react'
import PropTypes from 'prop-types';
import {Route, Redirect, Switch} from 'react-router-dom';
import {Layout, TableLayout, CellLeftLayout, CellRightLayout} from '__Source/components/layout/layout'
import {SideMenu} from '__Source/components/side-menu/side-menu'
import {MerterialKnowledge} from '__Source/components/meterials/meterials-knowledge';
import {MerterialService} from '__Source/components/meterials/meterials-service';
import {MerterialTemplateDownload} from '__Source/components/meterials/meterials-template-download';
import {MerterialUtilities} from '__Source/components/meterials/meterials-utilities';
import {MeterialsDetail} from '__Source/components/meterials/meterials-detail'
import {ROUTE_PATH} from '__Source/const';
import '__Source/components/meterials/meterials.less';

export class Meterials extends React.Component {

  constructor(){
    super()
    this.state={
      rootMenus :[]
    }
  }
  componentDidMount(){
    MerterialService.getMenus().then((menus) => {
      this.setState({
        rootMenus: menus
      })
    });
  }

  renderComponent =({match}) => {
     if(match.params.category !== 'all' && !this.state.rootMenus.find(m => m.key === match.params.category)){
       return <Redirect to={{
         pathname: `/${ROUTE_PATH.merterials}/template-download`
       }}/>
     }
     return <MerterialKnowledge category={match.params.category}/>
  }

  render() {
    return <Layout type="w-1000">
      <div className="meterial">
        <TableLayout>
          <CellLeftLayout>
            <SideMenu width={150}
              rootMenus={this.state.rootMenus}
              onClick={this.onClick}
            />
          </CellLeftLayout>
          <CellRightLayout>
            <div>
              <Switch>
                <Route exact path={`${this.props.url}/template-download`} component={MerterialTemplateDownload}/>
                <Route exact path={`${this.props.url}/utilities`} component={MerterialUtilities}/>
                <Route exact path={`${this.props.url}/knowledge/:category`} render={this.renderComponent}/>
                <Route exact path={`${this.props.url}/knowledge/:category/:articleId`} component={MeterialsDetail}/>
                <Route render={() => (
                  <Redirect to={{
                    pathname: `${this.props.url}/template-download`
                  }}/>
                )}/>
              </Switch>
            </div>
          </CellRightLayout>
        </TableLayout>
      </div>
    </Layout>
    ;
  }
}

Meterials.propTypes = {
  url: PropTypes.string,
};
