import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Index from "../pages/Home/index";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={() => (
                        <Redirect to="/modeling"/>
                    )}>
                    </Route>
                    <Route path="/modeling">
                        <Index />
                    </Route>
                </div>
            </Router>
        );
    }
}
export default App;
// export default [
//     {
//         path: "/sandwiches",
//         component: Sandwiches
//     },
//     {
//         path: "/tacos",
//         component: Tacos,
//         routes: [
//             {
//                 path: "/tacos/bus",
//                 component: Bus
//             },
//             {
//                 path: "/tacos/cart",
//                 component: Cart
//             }
//         ]
//     }
// ]