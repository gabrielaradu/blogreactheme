import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import ProjectsPage from "./projects/ProjectsPage";
import AboutMePage from "./about/AboutMePage";
import MainPage from "./MainPage";
import SinglePostContent from "./posts/SinglePostContent";

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/projects" component={ProjectsPage}/>
            <Route exact path="/about" component={AboutMePage}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>

);
export default Router;