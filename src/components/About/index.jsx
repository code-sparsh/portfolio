import { useEffect, useState } from "react";
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
} from './commands';

import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaMedium } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";



const About = () => {


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

    const [showTerminal, setShowTerminal] = useState(true)
    const [showIntro, setShowIntro] = useState(false)


    useEffect(() => {

        setTimeout(() => {
            setR1(root1)

            let i = 0;
            let line = ""
            const interval = setInterval(() => {
                if (i >= command1.length) {
                    clearInterval(interval)
                    return;
                }
                console.log(command1[i]);

                line = line + command1[i]
                setLine1(line);
                i++;
            }, 50);
        }, 500);

        setTimeout(() => {
            setLine2(output1)
        }, 1500);

        setTimeout(() => {
            setR2(root1)
            let i = 0;
            let line = ""
            const interval = setInterval(() => {
                if (i >= command2.length) {
                    clearInterval(interval)
                    return;
                }
                line = line + command2[i]
                setLine3(line);
                i++;
            }, 50);

        }, 2500);

        setTimeout(() => {
            setR3(root2)
            let i = 0;
            let line = ""
            const interval = setInterval(() => {
                if (i >= command3.length) {
                    clearInterval(interval)
                    return
                }

                line = line + command3[i]
                setLine4(line);
                i++;
            }, 50);
        }, 3500);

        setTimeout(() => {
            setLine5(output2)
        }, 4000);

        setTimeout(() => {
            setR4(root2)
            let i = 0;
            let line = ""
            const interval = setInterval(() => {
                if (i >= command4.length) {
                    clearInterval(interval)
                    return
                }

                line = line + command4[i]
                setLine6(line);
                i++;
            }, 50);
        }, 4500);

        setTimeout(() => {
            setShowTerminal(false)
            setShowIntro(true)
        }, 5500);



    }, [])


    return (
        <div className=" h-full border- border-green-600 md:w-1/2 ">

            <div className="flex flex-col items-center gap-4 md:gap-6 py-8">
                <div className="w-fit shadow-glow">
                    <img src={"/profile.png"} height="200" width="200" />
                </div>

                <div className="w-[70%] flex justify-center gap-5 mx-auto text-[#D6D6D6]">
                    <a href="https://www.linkedin.com/in/sparsh-sethi-9334481b7/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={30} /></a>
                    <a href="https://github.com/code-sparsh" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                    <a href="https://leetcode.com/SparshSethi/" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode size={30} /></a>
                    <a href="https://twitter.com/SparshSethi2" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={30} /></a>
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

            {showIntro ? <div className="mt-6 md:mt-10 pb-4 md:pb-10 mx-5 border-4 bg-yellow-100 rounded-2xl px-4  whitespace-pre-wrap h-fit text-center ">
                <div className="w-full text-center text-amber-800 text-2xl border-yellow-200 rounded-2xl">intro.md</div>
                <hr></hr>
                <div className="text-xl mt-2 md:mt-4  text-green-700">{intro}</div>
            </div> : null
            }

        </div>
    )
}
export default About