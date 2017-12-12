import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Code Sample</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link to="about" className="btn btn-primary btn-lg">About this project</Link>
            </div>
        );
    }
}

export default HomePage;
