import React from 'react';
import {observer} from 'mobx-react';
import authService from '../services/AuthService';
import { Table, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ListFacts = ({ limit, facts }) => {
    const canEdit = authService.authInfo &&
                    authService.authInfo.permissions.some(x => x === 'admin');
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Fact</th>
                        <th>Date</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                {
                    facts.slice(0, limit).map(fact => (
                        <tr key={fact._id}>
                            <td>{fact.text}</td>
                            <td>{fact.createdAt}</td>
                            <td className="text-right">
                                { canEdit && <Link to={`/EditFact/${fact._id}`}>Edit</Link> }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Container>
    )
};
ListFacts.propTypes = {
    limit: PropTypes.number
};
export default observer(ListFacts);