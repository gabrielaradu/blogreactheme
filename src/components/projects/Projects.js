import React, {Component} from 'react';
import SingleProject from "./SingleProject";

const projects = [
    {title: 'project title', preview: 'project preview content here', content: 'here is where you add content'},
    {
        title: 'project title two',
        preview: 'project preview content two here',
        content: 'here is where you add content two'
    },
]

class Projects extends Component {
    render() {
        return (
            <div className="content p-2">
                {Object.keys(projects).map((key, index) =>
                    (<SingleProject
                            key={key}
                            index={index}
                            details={projects[key]}/>
                    ))}
            </div>
        );
    }
}

export default Projects;
