import React from 'react';
import {sidebarLinkClass} from "./common/styleUtils";

class HeaderMenu extends React.Component {

    render() {
        return (
            <header className="header-container row">
                <div className="col-md-3 col-sm-12 d-flex">
                    <div className="text-center container-with-border-top">
                        <p>another.technical.blog</p>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 row justify-content-md-end justify-content-sm-center nav-links">
                    <a href="/" id="main">
                        <div className={"flex-grow-0 nav-item" + sidebarLinkClass(this.props.menuId, 'main')}>Home</div>
                    </a>
                    <a href="/" id="projects">
                        <div
                            className={"flex-grow-0 nav-item" + sidebarLinkClass(this.props.menuId, 'projects')}>Projects
                        </div>
                    </a>
                    <a href="/" id="about">
                        <div className={"flex-grow-0 nav-item" + sidebarLinkClass(this.props.menuId, 'about')}>About
                            Me
                        </div>
                    </a>
                    <div className="flex-grow-1"></div>
                </div>
            </header>
        );
    }
}

export default HeaderMenu;