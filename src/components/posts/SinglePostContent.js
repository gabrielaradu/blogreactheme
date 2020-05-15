import React, {Component} from 'react';

class SinglePostContent extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 mobile-title">{this.props.title}</h1>
                <p className="font-weight-lighter">
                    {this.props.content}
                </p>
                <p className="date-title">{this.props.date}</p>
            </div>
        );
    }
}

export default SinglePostContent;
