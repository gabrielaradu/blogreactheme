import React, {Component} from 'react';

class SinglePostPreview extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 mobile-title"><a href={this.props.url}>{this.props.title}</a></h1>
                <p className="font-weight-lighter">
                    {this.props.preview}
                </p>
                <p className="date-title" aria-labelledby="the date for the above article">{this.props.date}</p>
            </div>
        );
    }
}

export default SinglePostPreview;
