export const WithParams = (props) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl text-zinc-300 font-bold mb-2">{ props.title }</h2>
            <h3 className="text-lg text-violet-400 font-black">{ props.subtitle }</h3>
        </div>
    )
}