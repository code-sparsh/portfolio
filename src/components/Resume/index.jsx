const Resume = () => {

    return (

        <div className=" h-full lg:w-1/2 flex flex-col justify-center  gap-10 mx-8 md:mx-0">

            <div className=" text-5xl text-yellow-200 text-center">Resume</div>

            <iframe
                src={import.meta.env.VITE_RESUME_URL}
                className="w-full h-4/5"
                allow="autoplay"
            ></iframe>

        </div>
    )
}

export default Resume;