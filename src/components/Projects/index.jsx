
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard'
import projects from './data'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


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
            if (projects.length > 2) {
                numberOfPages = Math.ceil(projects.length / 2);

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
        for (let i = (pageNumber - 1) * 2; i < projects.length && i < pageNumber * 2; i++) {
            setProjectsOnCurrentPage(prevProjects => [
                ...prevProjects,
                projects[i]
            ])
        }


        console.log("current: ")
        console.log(projectsOnCurrentPage);
    }

    const onNextPage = () => {
        if(currentPage + 1 <= pageNumbers.length) {
            setCurrentPage((page) => page + 1);
        }
    }

    const onPreviousPage = () => {
        if(currentPage - 1 > 0) {
            setCurrentPage((page) => page - 1);
        }
    }


    return (


        <div className=" h-full lg:w-1/2 flex flex-col gap-x-24 gap-y-8">

            <div className=' text-7xl text-center text-yellow-600'>Projects</div>

            <div className='flex justify-center gap-2'>{pageNumbers.length>0 && pageNumbers.map((i) => {
                console.log("i: " + i +  " current: " + currentPage);
                return <PageNumberComponent key={i} number={i} currentPage = {currentPage} renderProjects={renderProjects} setCurrentPage={setCurrentPage} />
            }
            )}</div>

            <div className='grid md:grid-cols-2  md:mt-32  gap-x-6 gap-y-16 w-full'>
                {
                    (projectsOnCurrentPage.length > 0) && projectsOnCurrentPage.map((project) => {
                        return <ProjectCard key={project.id} project={project}></ProjectCard>
                    })

                }
            </div>


            
            <div className=' mt-20 pb-6  flex justify-center gap-x-10 w-full text-white'>
            { (currentPage != 1) && <button onClick={onPreviousPage} className="flex items-center  bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                <FaArrowLeft className="mr-2" />
                Previous Page
            </button>}

            { (currentPage < pageNumbers.length) && <button onClick={onNextPage} className="flex items-center  bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                Next Page
                <FaArrowRight className="ml-2" />
            </button>
            }
            </div>
            
            


        </div>
    )
}

const PageNumberComponent = ({ number,  currentPage, renderProjects, setCurrentPage }) => {

    return <div onClick={() => {renderProjects(number); setCurrentPage(number); currentPage=number; console.log("updated........: " + number + " " + currentPage);}} className={`bg-blue-500 p-3 cursor-pointer ${currentPage === number ? 'p-3 bg-yellow-500 border border-black' : ''}`}
    >{number}</div>
}

export default Projects;