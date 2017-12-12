import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav className={'navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top'}>
            <div className={'collapse navbar-collapse'}>
                <ul className={'navbar-nav mr-auto'}>
                    <li className={'nav-item'}>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </li>
                    <li className={'nav-item'}>
                        <Link to="/about" activeClassName="active">About</Link>
                    </li>
                    <li className={'nav-item'}>
                        <Link to="/contributors" activeClassName="active">Top Contributors</Link>
                    </li>

                    <li className={'nav-item'}>
                        {loading && <LoadingDots interval={100} dots={20} />}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
