
import ProjectCard from './ProjectCard'
import projects from './data'


const Projects = () => {


    return (

        <div className=" h-full md:w-1/2 flex flex-col gap-x-24 gap-y-10">

            <div className=' text-8xl text-center text-yellow-600'>Projects</div>

            <div className='grid md:grid-cols-2  gap-7 w-full'>
                {
                    projects && projects.map((project) => {
                        return <ProjectCard key={project.id} project={project}></ProjectCard>
                    })

                }
            </div>

        </div>
    )
}

export default Projects;