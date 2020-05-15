import React from 'react';
import {sidebarLinkClass} from "./common/styleUtils";

class HeaderMenu extends React.Component {

    render() {
        return (
            <header className="header-container row">
                <div className="col-md-3 col-sm-12 d-flex">
                    <div className="text-center container-with-border-top container-with-padding-top">
                        <p aria-label="this is the title of the page">another.technical.blog</p>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 row justify-content-md-end justify-content-sm-center nav-links">
                    <a href="/" id="main">
                        <div className={"flex-grow-0 nav-item" + sidebarLinkClass(this.props.menuId, 'main')}>Home</div>
                    </a>
                    <a href="/projects" id="projects">
                        <div
                            className={"flex-grow-0 nav-item" + sidebarLinkClass(this.props.menuId, 'projects')}>Projects
                        </div>
                    </a>
                    <a href="/about" id="about">
                        <div className={"flex-grow-0 nav-item" + sidebarLinkClass(this.props.menuId, 'about')}>About
                            Me
                        </div>
                    </a>
                    <div className="flex-grow-1"></div>
                    <div className="flex-grow-0 nav-item">
                        <label htmlFor="searchInPosts" className="pr-3">Search in posts:</label>
                        <input type="search" id="searchInPosts"
                               className="only-bottom-border-input bg-transparent"
                               aria-label="search in the blog posts"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderMenu;