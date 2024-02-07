
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (

        <div className="border border-gray-300 rounded-lg w-fit h-fit relative">




            <div className="title text-center">{project.title}
                <span
                    className="absolute right-2 p-1 rounded-full text-white bg-orange-500 z-10 cursor-pointer"
                    onClick={toggleDescription}
                >
                    ?
                </span>
            </div>

            {showDescription && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-9">
                    <div className="text-white text-center">{project.description}</div>
                </div>
            )}

            

            <div className="flex overflow-hidden h-fit rounded-lg border border-gray-300" >
                <img src={project.image2} className="w-2/3 h-auto object-cover"></img>
                <img src={project.image1} className="w-1/3 h-auto object-cover"></img>
            </div>

            <div className='flex bg-yellow-100 justify-between px-6 underline text-blue-700 ' >
                <a href={project.github1} className="cursor-pointer">GitHub (Backend)</a>
                <div>|</div>
                <a href={project.github2} className="cursor-pointer">GitHub (Frontend)</a>
            </div>

        </div>
    )

}

export default ProjectCard;