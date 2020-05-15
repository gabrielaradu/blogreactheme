import React, {Component} from 'react';
import Page from "../Page";
import Projects from "./Projects";

class ProjectsPage extends Component {

    render() {
        const ComponentHoc = Page(Projects);
        return (
            <div>
                <ComponentHoc {...this.props} returnHome={this.returnHome} activeMenu={'item-active'} selectedMenuItem="projects"/>
            </div>
        );
    }

    returnHome = () => {
        this.props.history.push({
            pathname: '/'
        });
    };
}

export default ProjectsPage;
