

const Sidebar = () => {

    return <div className="flex flex-col gap-4 justify-center items-center ">
        <div className="w-full text-2xl border px-10 py-6 rounded-2xl hover:bg-zinc-700">💁🏻‍♂️ About</div>
        <div className="text-4xl">|</div>
        <div className="w-full text-2xl border px-10 py-6 rounded-2xl hover:bg-zinc-700">💼 Experience</div>
        <div className="text-4xl">|</div>
        <div className="w-full text-2xl border px-10 py-6 rounded-2xl hover:bg-zinc-700">🛠️ Projects</div>
        <div className="text-4xl">|</div>
        <div className="w-full text-2xl border px-10 py-6 rounded-2xl hover:bg-zinc-700">💬 Contact</div>
        <div className="text-4xl">|</div>
        <div className="w-full text-2xl border px-10 py-6 rounded-2xl hover:bg-zinc-700">✍🏻 Blogs</div>
    </div>
}

export default Sidebar;