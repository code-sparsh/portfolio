import { useEffect, useState } from "react";

const Sidebar = ({ selectedCard, setSelectedCard }) => {

    

    useEffect(() => {
        var width = window.innerWidth;
        
        if (width > 768) {
            setDeviceType("pc");
        }
    }, [])

    const [deviceType, setDeviceType] = useState("smartphone")

    return deviceType == "smartphone" ?

        (<div className="flex gap-2 bg-stone-900 rounded-full mx-3  ">

            <div onClick={() => setSelectedCard("about")} className={` ${selectedCard === "about" ? " bg-slate-800" : ""}  w-full text-2xl  p-5 rounded-full  "`}> 💁🏻‍♂️</div>
            {/* <div className="text-xl">|</div> */}

            <div onClick={() => setSelectedCard("education")} className={` ${selectedCard === "education" ? " bg-slate-800" : ""}  w-full text-2xl  p-5 rounded-full  "`}>🎓</div>
            {/* <div className="text-xl">|</div> */}

            <div onClick={() => setSelectedCard("projects")} className={` ${selectedCard === "projects" ? " bg-slate-800" : ""}  w-full text-2xl  p-5 rounded-full  "`}>🛠️</div>
            {/* <div className="text-xl">|</div> */}

            <div onClick={() => setSelectedCard("contact")} className={` ${selectedCard === "conctact" ? " bg-slate-800" : ""}  w-full text-2xl  p-5 rounded-full  "`}> 💬</div>
            {/* <div className="text-xl">|</div> */}

            <div onClick={() => setSelectedCard("blogs")} className={` ${selectedCard === "blogs" ? " bg-slate-800" : ""} w-full text-2xl  p-5 rounded-full  "`}>✍🏻</div>
        </div>)


        : (<div className="flex flex-col gap-4 justify-center items-center border border-stone-900 rounded-full px-28  bg-stone-900 my-10">

            <div onClick={() => setSelectedCard("about")} className={` ${selectedCard === "about" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-6 rounded-2xl cursor-pointer "`}> 💁🏻‍♂️ About</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("education")} className={` ${selectedCard === "education" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-6 rounded-2xl cursor-pointer "`}>🎓 Education</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("projects")} className={` ${selectedCard === "projects" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-6 rounded-2xl cursor-pointer "`}>🛠️ Projects</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("contact")} className={` ${selectedCard === "conctact" ? " bg-slate-800" : ""} hover:bg-zinc-700 w-full text-2xl border px-10 py-6 rounded-2xl cursor-pointer "`}> 💬 Contact</div>
            <div className="text-4xl">|</div>

            <div onClick={() => setSelectedCard("blogs")} className={` ${selectedCard === "blogs" ? " bg-slate-800" : ""}hover:bg-zinc-700 w-full text-2xl border px-10 py-6 rounded-2xl cursor-pointer "`}>✍🏻 Blogs</div>
        </div>)
}

export default Sidebar;