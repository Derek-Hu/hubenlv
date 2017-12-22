import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Redirect, Switch} from 'react-router-dom';
import {Layout, TableLayout, CellLeftLayout, CellRightLayout} from '__Source/components/layout/layout'
import {SideMenu} from '__Source/components/side-menu/side-menu'
import {NewsDetail} from '__Source/components/news/news-detail'
import {NewsList} from '__Source/components/news/news-list'
import {NewsService} from '__Source/components/news/news-service'
import {DynamicInfoAbstract} from '__Source/components/dynamicInfoAbstract/dynamicInfoAbstract';
import {ROUTE_PATH} from '__Source/const';
import '__Source/components/core-service/core-service.less';

export class News extends React.Component {

    static articleIdIndx = 4

    constructor() {
        super()
        this.state = {
            rootMenus: [],
            item: {}
        }
    }

    componentDidMount(){
      NewsService.getMenus().then((menus) => {
        this.setState({
          rootMenus: menus
        })
      });

      NewsService.getCarouselNews().then((carousel) => {
          this.setState({
            item: carousel[0] || {}
          })
      });

    }

    isShowDynamicInfo(settings, location) {
        return location.pathname.split('/').length < News.articleIdIndx;
    }

    renderComponent = ({match}) => {
      if(match.params.category !== 'all' &&  !this.state.rootMenus.find(m => m.key === match.params.category)){
        return <Redirect to={{
          pathname: `/${ROUTE_PATH.news}/all`
        }}/>
      }
      return <NewsList category={match.params.category}/>

    }

    render() {
        return <Layout type="w-1000">
            <div className="news">
                <NavLink className="dynamic-info-link" isActive={this.isShowDynamicInfo}
                         to={this.state.item.url || ''}><DynamicInfoAbstract item={this.state.item}/></NavLink>
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
                            <Route exact path={`${this.props.url}/:category`} render={this.renderComponent}/>
                            <Route exact path={`${this.props.url}/:category/:articleId`} component={NewsDetail}/>
                            <Route exact path={this.props.url} render={() => (
                                <Redirect to={{
                                    pathname: `${this.props.url}/all`
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

News.propTypes = {
    url: PropTypes.string,
};
