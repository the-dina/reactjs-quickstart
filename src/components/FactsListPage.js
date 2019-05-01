import React, {Component} from 'react';
import ListFacts from './ListFacts';
import httpService from '../services/HttpService';
class FactsListPage extends Component {
    state = { facts: null };

    componentDidMount() {
        const factsUrl = "https://api.myjson.com/bins/102jvy";
        httpService.get(factsUrl)
            .then(facts => this.setState({facts: facts}))
    }

    render() {
        const {facts} = this.state;

        const headerStyle = {textAlign: "center"};
        if (!facts) return <h1 style={headerStyle}>Loading...</h1>;
        return (
            <div>
                <h1 className="text-center">Cat facts (2/{facts.length})</h1>
                <ListFacts facts={facts} limit={2} />
            </div>
        )
    }
}
export default FactsListPage;
