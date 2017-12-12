import React, { PropTypes } from 'react';

const ContributorsListRow = ({contributor}) => {
    return (
        <tr>
            <td><a href={`https://github.com/${contributor.login}`} target="_blank">Github</a></td>
            <td>{contributor.name}</td>
            <td>{contributor.location}</td>
            <td>{contributor.contributions}</td>
            <td><img className={'gravatar'} src={contributor.gravatar}/></td>
        </tr>
    );
};

ContributorsListRow.propTypes = {
    contributor: PropTypes.object.isRequired
};

export default ContributorsListRow;
