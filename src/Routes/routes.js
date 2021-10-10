import React from "react";
import { Route, Switch } from "react-router";

import Lista from "../Pages/Lista/Lista";
import Newquestion from '../Pages/Newquestion/Newquestion';


function Routes (){
    return (
        <Switch>
            <Route path="/" exact={true} component={Lista} />
            <Route path="/newquestion" component={Newquestion} />
        </Switch>
    );
}

export default Routes;