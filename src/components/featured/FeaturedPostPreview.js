import React, {Component} from 'react';

class FeaturedPostPreview extends Component {
    render() {
        return (
            <div className="col-md-3 col-lg-3 col-sm-12 pb-3">
                <h6><a href={this.props.url}>{this.props.title}</a></h6>
                <p className="font-weight-lighter">{this.props.preview}</p>
            </div>
        );
    }
}

export default FeaturedPostPreview;
