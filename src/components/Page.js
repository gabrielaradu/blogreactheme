import React, {Component} from 'react';
import HeaderMenu from "./HeaderMenu";

const Page = (InnerComponent) => class extends Component {

    render() {
        return (
            <div className="main-container overflow-auto h-100">
                <div className="main-container-highlight">
                    <HeaderMenu menuId={this.props.selectedMenuItem} toAboutMe={this.toAboutMe} toHome={this.toHome} toProjects={this.toProjects}/>
                    <main>
                        <InnerComponent {...this.props} toHome={this.toHome} toProjects={this.toProjects} toAboutMe={this.toAboutMe}/>
                    </main>
                </div>
            </div>
        );
    }

    toHome = () => this.props.history.push(`/`);
    toProjects = () => this.props.history.push(`/projects`);
    toAboutMe = () => this.props.history.push(`/about`);
};

export default Page;
