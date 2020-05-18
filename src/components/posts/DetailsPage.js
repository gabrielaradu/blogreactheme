import React, {Component} from 'react';
import Page from "../Page";
import DetailsContent from "./DetailsContent";

class DetailsPage extends Component {

    render() {
        const ComponentHoc = Page(DetailsContent);
        return (
            <div>
                <ComponentHoc {...this.props} returnHome={this.returnHome}/>
            </div>
        );
    }
}

export default DetailsPage;
