import { useEffect, useState } from "react";
import profileImage from "../assets/panda.jpeg"
import {
    command1,
    output1,
    command2,
    output2,
    command3,
    intro,
    command4,
    root1,
    root2,
} from './commands.tsx';

import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";


const Layout = () => {


    const [line1, setLine1] = useState("")
    const [line2, setLine2] = useState("")
    const [line3, setLine3] = useState("")
    const [line4, setLine4] = useState("")
    const [line5, setLine5] = useState("")
    const [line6, setLine6] = useState("")
    const [r1, setR1] = useState("")
    const [r2, setR2] = useState("")
    const [r3, setR3] = useState("")
    const [r4, setR4] = useState("")

    const [showTerminal, setShowTerminal] = useState(false)
    const [showIntro, setShowIntro] = useState(true)


    useEffect(() => {

        setTimeout(() => {
            setR1(root1)
            setLine1(command1)
        }, 1000);

        setTimeout(() => {
            setLine2(output1)
        }, 1500);

        setTimeout(() => {
            setR2(root1)
            setLine3(command2)
        }, 2500);

        setTimeout(() => {
            setR3(root2)
            setLine4(command3)
        }, 3500);

        setTimeout(() => {
            setLine5(output2)
        }, 4000);

        setTimeout(() => {
            setR4(root2)
            setLine6(command4)
        }, 4500);

        setTimeout(() => {
            setShowTerminal(true)
            setShowIntro(false)
        }, 5500);



    }, [])


    return (
        <div className=" h-full border- border-green-600 md:w-1/2 ">

            <div className="flex flex-col items-center py-8">
                <div className="w-fit shadow-glow">
                    <img src={profileImage} height="150" width="150" />
                </div>

                <div className="w-[70%] flex justify-between mx-auto mt-[2vh] md:mt-[6vh] text-[#D6D6D6]">
                    <a href="https://www.linkedin.com/in/sparsh-sethi-9334481b7/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={20} /></a>
                    <a href="https://github.com/code-sparsh" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                    <a href="https://leetcode.com/SparshSethi/" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode size={20} /></a>
                    <a href="https://twitter.com/SparshSethi2" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={20} /></a>
                    {/* <a href="https://medium.com/@sparshsethi" target="_blank" rel="noopener noreferrer"><FaMedium size={20} /></a> */}
                </div>
            </div>

    

            <div className=' w-full text-center text-6xl md:text-8xl font-cyberway text-green-600 whitespace-pre mb-4'>Sparsh  Sethi</div>
            <hr></hr>
            {/* <div>
                <div className="terminal-intro text-green-300 font-mono whitespace-pre animate-pulse">
                    
                    <p className="relative">
                        <span className="pr-1">$</span> Email: john@example.com
                    </p>
                    
                    <p className="relative">
                        <span className="pr-1">$</span> Name: John Doe
                    </p>
                    
            
                </div>
            </div> */}

            {/* <div className="mt-10">Booting up ...........</div> */}


            {showTerminal ? <div className=" mt-10 mx-5 h-fit border-blue-700 border- border-opacity-90 bg-black rounded-2xl px-1 pt-2 pb-12 whitespace-pre">


                <div><span className=" text-red-300">{r1} </span>  {line1}</div>
                <div className=" text-yellow-300">{line2}</div>
                <br />
                <div><span className=" text-red-300">{r2}</span>  {line3}</div>
                <br />
                <div><span className=" text-red-300">{r3}</span>  {line4}</div>
                <div className="  text-pink-600 whitespace-pre ">{line5}</div>
                <br />
                <div><span className=" text-red-300">{r4}</span>  {line6}</div>
            </div> : null
            }

            {showIntro ? <div className="mt-10 mx-5 border-yello-700 border-4 bg-yellow-100 rounded-2xl px-4 text-green-700 whitespace-pre-wrap h-fit text-center ">
                <div className="w-full text-center text-amber-800 text-2xl ">intro.md</div>
                <hr></hr>
                {intro}
            </div> : null
            }

        </div>
    )
}
export default Layout