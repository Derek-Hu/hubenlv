import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch} from 'react-router-dom';
import {Layout, TableLayout, CellLeftLayout, CellRightLayout} from '__Source/components/layout/layout'
import {SideMenu} from '__Source/components/side-menu/side-menu'
import {Partnership} from '__Source/components/partnership/partnership'
import {PartnershipDetail} from '__Source/components/partnership/partnership-detail'
import {CoreDataService} from '__Source/components/core-service/core-data-service';
import {ROUTE_PATH} from '__Source/const';
import '__Source/components/core-service/core-service.less';

export class CoreService extends React.Component {

    constructor() {
        super()
        const menus = CoreDataService.getMenus();
        this.state = {
            rootMenus: menus,
            key: ''
        }
    }

    onClick = (item, key, keyPath) => {
        this.setState({
            key: key
        })
    }

    renderComponent = ({match}) => {
        if(!CoreDataService.existsCategory(match.params.category)){
          return <Redirect to={{
            pathname: `/${ROUTE_PATH.coreService}/intermediary-org`
          }}/>
        }else{
          return <Partnership detail={true} category={match.params.category}/>
        }
    }

    render() {
        return <Layout type="w-1000">
            <div className="core-service">
                <TableLayout>
                    <CellLeftLayout>
                        <SideMenu width={160}
                                  rootMenus={this.state.rootMenus}
                                  onClick={this.onClick}
                        />
                    </CellLeftLayout>
                    <CellRightLayout>
                        <div>
                          <Switch>
                            <Route exact path={`/${ROUTE_PATH.coreService}/:category`} render={this.renderComponent}/>
                            <Route exact path={`/${ROUTE_PATH.coreService}/:category/:orgId`} component={PartnershipDetail}/>
                            <Route render={() => (
                                <Redirect to={{
                                    pathname: `/${ROUTE_PATH.coreService}/intermediary-org`
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

CoreService.propTypes = {
    url: PropTypes.string,
};
