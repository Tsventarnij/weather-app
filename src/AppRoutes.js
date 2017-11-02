import React from 'react'
import {Route, IndexRoute} from 'react-router'

/*master*/
import MasterApp from './components/MasterApp'
import Home from './components/pages/Home'
import Tommorow from './components/pages/Tommorow'
import Today from './components/pages/Today'
import Week from './components/pages/Week'
import Yesterday from './components/pages/Yesterday'
/*end master*/

const _defaultRoute = '/';

const AppRoutes = (
    <Route component={MasterApp}>

        <Route path={_defaultRoute}>
            <IndexRoute name="home" component={Home}/>
            <Route name=":cityID/yesterday" path=":cityID/yesterday" component={Yesterday}/>
            <Route name=":cityID/tommorow" path=":cityID/tommorow" component={Tommorow}/>
            <Route name=":cityID/today" path=":cityID/today" component={Today}/>
            <Route name=":cityID/week" path=":cityID/week" component={Week}/>
        </Route>


    </Route>
);

export default AppRoutes;