import React from 'react'

const ProjectsList = (props) => {
    const renderProjects = props.projects.map((project) => {
        const {name} = project;
        return (
            <div className="project-wrapper">
                <p>{name}</p>
            </div>
        );
    });
return <div>
    {renderProjects}
</div>
};

export default ProjectsList
