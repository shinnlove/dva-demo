import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import MyButton from './routes/MyButton';
import SearchInputContainer from './routes/select/SearchInputContainer';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        {/*<Redirect from="/toolkit" to="/IndexPage"/>*/}
        <Route path="/" exact component={IndexPage}/>
        {/* 新增一个路由 */}
        <Route path="/button" component={MyButton}/>

        <Route path="/select" component={SearchInputContainer}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
