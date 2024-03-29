import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const EducationCard = () => {
    return (
        <div className='h-full'>

            <div className=' text-7xl text-center text-yellow-300 mb-10'>Education</div>

            <div className=' flex flex-col gap-12 h-full items-center mx-6'>
                
                <div className='border border-stone-400 w-full md:w-1/2 h-auto p-3 rounded-2xl shadow-2xl  shadow-black' >
                    <div className=' text-2xl  border w-fit p-1 mb-4'><b>Undergraduation</b> (pursuing)</div>
                    <div className=' flex justify-center  mb-2'><img src="/education/msit.png"></img></div>
                    <div className=' text-center text-yellow-200'>Maharaja Surajmal Institute of Technology</div>
                    {/* <a href='https://msit.in/' target='_blank' className=' text-center'>(msit.in)</a> */}

                    <div className=' mt-8 '>B.Tech in Information Technology</div>
                    <div className=' text-end font-bold'>2021-25</div>
                </div>


                <div className='border border-stone-400 w-full md:w-1/2 h-auto p-3 rounded-2xl bg-stone-00 shadow-2xl  shadow-black' >
                    <div className=' text-2xl font-bold border w-fit p-1 mb-4'>Senior Secondary</div>
                    <div className=' flex justify-center  mb-2'><img src="/education/sgnps.png"></img></div>
                    <div className=' text-center text-yellow-200'>Sri Guru Nanak Public School</div>
                    {/* <a href='https://msit.in/' target='_blank' className=' text-center'>(msit.in)</a> */}

                    <div className=' mt-8 '><b>CBSE:</b> Senior Secondary Education</div>
                    <div className=' text-end font-bold'>2018-20</div>
                </div>
                
            </div>

        </div>
    );
}

export default EducationCard;