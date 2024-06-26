import { useEffect, useState } from "react";

const Sidebar = ({ selectedCard, setSelectedCard }) => {

    

    useEffect(() => {
        var width = window.innerWidth;
        
        if (width > 1024) {
            setDeviceType("pc");
        }
    }, [])

    window.addEventListener("resize", () => {
        var width = window.innerWidth;
        
        if (width > 1024) {
            setDeviceType("pc");
        }
        else {
            setDeviceType("smartphone");
        }
    })

    const [deviceType, setDeviceType] = useState("smartphone")

    return deviceType == "smartphone" ?

        (<div className="flex gap-2 bg-stone-900 rounded-full mx-3  ">

            <div onClick={() => setSelectedCard("about")} className={` ${selectedCard === "about" ? " bg-slate-800" : ""}  w-full text-2xl  text-center p-5 rounded-full  "`}> 💁🏻‍♂️</div>
            {/* <div className="text-xl">|</div> */}

            <div onClick={() => setSelectedCard("education")} className={` ${selectedCard === "education" ? " bg-slate-800" : ""}  w-full text-2xl text-center  p-5 rounded-full  "`}>🎓</div>
            {/* <div className="text-xl">|</div> */}

            <div onClick={() => setSelectedCard("projects")} className={` ${selectedCard === "projects" ? " bg-slate-800" : ""}  w-full text-2xl  text-center p-5 rounded-full  "`}>🛠️</div>
            {/* <div className="text-xl">|</div> */}

            <div onClick={() => setSelectedCard("resume")} className={` ${selectedCard === "resume" ? " bg-slate-800" : ""} w-full text-2xl text-center p-5 rounded-full  "`}>📝</div>

            <div onClick={() => setSelectedCard("contact")} className={` ${selectedCard === "contact" ? " bg-slate-800" : ""}  w-full text-2xl text-center p-5 rounded-full  "`}> 💬</div>
            {/* <div className="text-xl">|</div> */}

            
        </div>)


        : (<div className="flex flex-col gap-3 justify-center items-center border border-stone-900 rounded-full px-28  bg-stone-900">

            <div onClick={() => setSelectedCard("about")} className={` ${selectedCard === "about" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-5 rounded-2xl cursor-pointer transition-colors  duration-300"`}> 💁🏻‍♂️ About</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("education")} className={` ${selectedCard === "education" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-5 rounded-2xl cursor-pointer transition-colors  duration-300 "`}>🎓 Education</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("projects")} className={` ${selectedCard === "projects" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-5 rounded-2xl cursor-pointer transition-colors  duration-300"`}>🛠️ Projects</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("resume")} className={` ${selectedCard === "resume" ? " bg-slate-800" : ""}hover:bg-zinc-700 w-full text-2xl border px-10 py-5 rounded-2xl cursor-pointer transition-colors  duration-300"`}>📝 Resume</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("contact")} className={` ${selectedCard === "contact" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-5 rounded-2xl cursor-pointer transition-colors  duration-300 "`}> 💬 Contact</div>
            

            
        </div>)
}

export default Sidebar;