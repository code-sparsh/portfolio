
import React, { useState } from 'react';
import githubLogo from '../../assets/Github-Logo.png'
import redirectLogo from '../../assets/redirect-logo.png'

const ProjectCard = ({ project }) => {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

 

    return (

        <div onClick={toggleDescription} className=" border border-gray-300 rounded-lg mx-6 md:mx-2  w-fit h-fit relative">


            <div className="title text-center">
                {project.title}
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
                </div>git commitsd --amend --no-edit
            )}

            

            <div className="flex overflow-hidden h-fit rounded-lg border border-gray-300 cursor-pointer" >
                <img src={project.image2} className="w-2/3 h-auto object-cover border"></img>
                <img src={project.image1} className="w-1/3 h-auto object-cover"></img>
            </div>

            <div className='absolute rounded-lg border rounded-t-none w-full flex bg-yellow-100 bg-zinc-600/ justify-between px-6 py-3  text-blue-700 text-black ' >
                <a href={project.link} className="cursor-pointer flex justify-evenly"><img src={redirectLogo} height={24} width={24}></img></a>
                <div>|</div>
                <a href={project.github1} className="cursor-pointer flex gap-2"><img src={githubLogo} height={24} width={24}></img>(Link 1)</a>
                <div>|</div>
                <a href={project.github2} className="cursor-pointer flex gap-2"><img src={githubLogo} height={24} width={24}></img>(Link 2)</a>
            </div>

        </div>
    )

}

export default ProjectCard;