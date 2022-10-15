
export function Card(props)  {
    return (
        <div className="bg-zinc-800 rounded-lg w-[100%] md:w-[500px] flex flex-col items-center m-4">
            <div className="w-full py-4 px-5 flex items-center">
                <h1 className="text-2xl text-violet-400 font-black">
                    {props.title}
                </h1>
            </div>
            <div className="bg-zinc-700 py-6 px-5 w-full rounded-xl border-4 border-zinc-800 flex-1">
                <p className="">
                    {props.children}
                </p>
            </div>
        </div>
    )
}