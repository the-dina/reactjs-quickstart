import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import PageNavbar from './components/PageNavbar';
import FactsListPage from './components/FactsListPage';
import HelpPage from "./components/HelpPage";
import FactEditPage from "./components/FactEditPage";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Fragment>
                        <PageNavbar/>
                        <Route path="/help" component={HelpPage} />
                        <Route path="/EditFact/:factId" component={FactEditPage} />
                        <Route path="/" exact={true} component={FactsListPage} />
                    </Fragment>
                </Router>
            </div>
        );
    }
}

export default App;
