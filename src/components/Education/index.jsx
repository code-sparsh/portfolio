import educations from './data'

const Education = () => {

    

    return (

        <div className=" h-full lg:w-1/2 flex flex-col ">

            <div className=' text-7xl text-center text-yellow-300 my-10'>Education</div>

            <div className=' flex flex-col lg:flex-row gap-12 items-center  mx-6'>

                <div className='border border-stone-400 w-full md:w-1/2 h-auto p-3 rounded-2xl  shadow-black text-center ' >
                    <div className='  text-2xl  border rounded-lg p-1 mb-4'><b>Undergraduation</b> <span className=' text-blue-400'>(ongoing) </span></div>
                    <div className=' flex justify-center  mb-2'><img src={educations[0].image}></img></div>
                    <a href='https://msit.in/' target='_blank' className='text-center text-yellow-200'>Maharaja Surajmal Institute of Technology</a>
                    <div className=' text-center un'>(Affiliated to <a href='http://ipu.ac.in' className=' underline'>GGSIPU</a>)</div>


                    <div className=' mt-8 '>B.Tech in Information Technology</div>
                    <div className=' text-end font-bold'>2021-25</div>
                </div>


                <div className='border border-stone-400 w-full md:w-1/2 h-auto p-3 rounded-2xl bg-stone-00 shadow-2xl  shadow-black text-center' >
                    <div className=' text-2xl font-bold border rounded-lg  p-1 mb-4'>Senior Secondary</div>
                    <div className=' flex justify-center  mb-2'><img src={educations[1].image}></img></div>
                    <a href='https://sgnps.in/' target='_blank' className=' text-center text-yellow-200'>Sri Guru Nanak Public School</a>

                    <div className=' mt-8 '><b>CBSE:</b> Senior Secondary Education</div>
                    <div className=' text-end font-bold'>2018-20</div>
                </div>

            </div>

        </div>

    )
}

export default Education;