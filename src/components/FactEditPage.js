import React, {Component} from 'react';
import {withRouter} from 'react-router';

class FactEditPage extends Component {

    factId = this.props.match.params.factId;

    render() {
        return(
            <div className="text-center">
                <h1>Edit fact</h1>
                <p>Fact Id: {this.factId}</p>
            </div>
        )
    }
}

export default withRouter(FactEditPage)











