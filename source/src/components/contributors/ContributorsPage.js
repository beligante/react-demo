import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as contributorsActions from '../../actions/contributorActions';
import ContributorsList from './ContributorsList';

class ContributorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount(){
        this.props.actions.loadContributors();
    }

    render() {
        return (
            <div>
                <h1>Top 10 Github Contributors</h1>
                <p>List source from: <a href={'https://git.io/top'} target="_blank">git.io/top</a></p>
                <ContributorsList contributors={this.props.contributors} />
            </div>
        );
    }
}

ContributorsPage.propTypes = {
    contributors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps({contributors}, ownProps) {
    return {
        contributors
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(contributorsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsPage);
