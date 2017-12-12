import React, { PropTypes } from 'react';
import ContributorsListRow from './ContributorsListRow';

const ContributorsList = ({contributors}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Location</th>
                <th>Contributions</th>
                <th>Gravatar</th>
            </tr>
            </thead>
            <tbody>
            {!!contributors.length && contributors.map(contributor =>
                <ContributorsListRow key={contributor.login} contributor={contributor} />
            )}
            {!contributors.length && <h2>No Contributors to display</h2>}
            </tbody>
        </table>
    );
};

ContributorsList.propTypes = {
    contributors: PropTypes.array.isRequired
};

export default ContributorsList;
