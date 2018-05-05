import React from 'react';
import RegularCSS from './components/RegularCSS/RegularCSS';
import InlineCSS from './components/InlineCSS/InlineCSS';
import CSSInJs from './components/CSSInJs/CSSInJs';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route component={RegularCSS} path="/regularcss" />
        <Route component={InlineCSS} path="/inlinecss" />
        <Route component={CSSInJs} path="/cssinjs" />
    </Switch>
)