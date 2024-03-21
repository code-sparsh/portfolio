
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard'
import projects from './data'


const Projects = () => {

    // const [numberOfPages, setNumberOfPages] = useState(0);

    let numberOfPages = 1;
    const [pageNumbers, setPageNumbers] = useState([])
    const [projectsOnCurrentPage, setProjectsOnCurrentPage] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        numberOfPages = 1;
        console.log("len: " + projects.length);
        if (projects.length > 0) {
            if (projects.length > 4) {
                numberOfPages = Math.ceil(projects.length / 4);

                console.log("yes");
            }
            else {
                numberOfPages = 1;
            }
        }

        renderProjects(currentPage);
        renderPageNumbers(numberOfPages);

    }, [projects])

    useEffect(() => {
        renderProjects(currentPage)
    }, [currentPage])

    const renderPageNumbers = (numberOfPages) => {

        console.log(numberOfPages);

        for (let i = 1; i <= numberOfPages; i++) {

            setPageNumbers(prevPageNumbers => [
                ...prevPageNumbers,
                i
            ]);

            // setPageNumbers(prevPageNumbers => [
            //     ...prevPageNumbers,
            //     <PageNumberComponent key={i} number={i} currentPage = {currentPage} renderProjects={renderProjects} setCurrentPage={setCurrentPage} />
            // ]);
        }
    }

    const renderProjects = (pageNumber) => {

        setProjectsOnCurrentPage([])

        console.log("idhar kyu");
        console.log(pageNumber);
        for (let i = (pageNumber - 1) * 4; i < projects.length && i < pageNumber * 4; i++) {
            setProjectsOnCurrentPage(prevProjects => [
                ...prevProjects,
                projects[i]
            ])
        }


        console.log("current: ")
        console.log(projectsOnCurrentPage);
    }


    return (


        <div className=" h-full md:w-1/2 flex flex-col gap-x-24 gap-y-8">

            <div className=' text-7xl text-center text-yellow-600'>Projects</div>

            <div className='flex justify-center gap-2'>{pageNumbers.length>0 && pageNumbers.map((i) => {
                console.log("i: " + i +  " current: " + currentPage);
                return <PageNumberComponent key={i} number={i} currentPage = {currentPage} renderProjects={renderProjects} setCurrentPage={setCurrentPage} />
            }
            )}</div>

            <div className='grid md:grid-cols-2  gap-x-6 gap-y-16 w-full'>
                {
                    (projectsOnCurrentPage.length > 0) && projectsOnCurrentPage.map((project) => {
                        return <ProjectCard key={project.id} project={project}></ProjectCard>
                    })

                }
            </div>




            
            


        </div>
    )
}

const PageNumberComponent = ({ number,  currentPage, renderProjects, setCurrentPage }) => {

    return <div onClick={() => {renderProjects(number); setCurrentPage(number); currentPage=number; console.log("updated........: " + number + " " + currentPage);}} className={`bg-blue-500 p-3 cursor-pointer ${currentPage === number ? 'p-3 bg-yellow-500' : ''}`}
    >{number}</div>
}

export default Projects;