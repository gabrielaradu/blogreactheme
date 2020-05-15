import React, {Component} from 'react';
import Page from "../Page";
import AboutMe from "./AboutMe";

class AboutMePage extends Component {

    render() {
        const ComponentHoc = Page(AboutMe);
        return (
            <div>
                <ComponentHoc {...this.props} returnHome={this.returnHome} activeMenu={'item-active'} selectedMenuItem="about"/>
            </div>
        );
    }
}

export default AboutMePage;
