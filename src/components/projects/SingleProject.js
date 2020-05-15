import React, {Component} from 'react';

class SingleProject extends Component {

    render() {
        console.log(this.props);
        const {title, content} = this.props.details;
        return (
            <div>
                <h1 className="display-4 mobile-title">{title}</h1>
                <p className="font-weight-lighter">
                    {content}
                </p>
            </div>
        );
    }
}

export default SingleProject;
