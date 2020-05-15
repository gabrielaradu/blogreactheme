import React, {Component} from 'react';
import '../styles/App.scss';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron row">
                    <h2 className="m-auto">Hmm... you seem to be lost. Go back <a href="http://gabrielaradu.me">home.</a></h2>
                </div>
                <a href="http://gabrielaradu.me/" rel="noopener noreferrer" target="_blank" className="row">
                    <img src={require('../img/undraw_page_not_found.svg')} alt="Invitation was sent with success"/>
                </a>
            </div>
        );
    }
}

export default NotFound;
