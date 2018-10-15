import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class BasicExample extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/topics">Topics</Link>
//                         </li>
//                     </ul>
//
//                     <hr />
//
//                     <Route exact path="/" component={Home} />
//                     <Route path="/about" component={About} />
//                     <Route path="/topics" component={Topics} />
//                 </div>
//             </Router>
//         );
//     }
// }
//
// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Home</h2>
//             </div>
//         );
//     }
// }
//
// class About extends Component{
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h2>About</h2>
//             </div>
//         );
//     }
// }
// class Topics extends Component{
//     render() {
//         return (
//             <div>
//                 {console.log(this.props.match)}
//                 <h2>Topics</h2>
//                 <ul>
//                     <li>
//                         <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
//                     </li>
//                     <li>
//                         <Link to={`${this.props.match.url}/components`}>Components</Link>
//                     </li>
//                     <li>
//                         <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
//                     </li>
//                 </ul>
//
//                 <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
//                 <Route
//                     exact
//                     path={this.props.match.url}
//                     render={() => <h3>Please select a topic.</h3>}
//                 />
//             </div>
//         );
//     }
// }
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// );
const ParamsExample = () => (
    <Router>
        <div>
            <h2>Accounts</h2>
            <ul>
                <li>
                    <Link to="/netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/zillow-group">Zillow Group</Link>
                </li>
                <li>
                    <Link to="/yahoo">Yahoo</Link>
                </li>
                <li>
                    <Link to="/modus-create">Modus Create</Link>
                </li>
            </ul>

            <Route path="/:id" component={Child} />

            {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
            <Route
                path="/order/:fs(asc|desc)"
                component={ComponentWithRegex}
            />
        </div>
    </Router>
);

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
);

const ComponentWithRegex = ({ match }) => (
    <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
);
export default ParamsExample;