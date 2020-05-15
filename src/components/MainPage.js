import React, {Component} from 'react';
import Main from "./Main";
import Page from "./Page";

class ProjectsPage extends Component {

    render() {
        const ComponentHoc = Page(Main);
        return (
            <div>
                <ComponentHoc {...this.props} activeMenu={'item-active'} selectedMenuItem="main"/>
            </div>
        );
    }
}

export default ProjectsPage;
