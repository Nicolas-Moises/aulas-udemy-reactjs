import { useState } from "react";

export function Input() {
    const [valor, setvalor] = useState("");

    function toggleValue(e) {
        setvalor(e.target.value);
    }

    return (
        <div>
            <h3 className="text-lg text-zinc-200 font-bold mb-5">
                Como devo te chamar?{" "}
                <span className="font-black text-xl">{valor}</span>
            </h3>
            <div className="flex flex-col gap-4">
                <input
                    value={valor}
                    onChange={toggleValue}
                    className="outline-none focus:ring-2 ring-cyan-300 ring-inset bg-zinc-800 rounded-lg p-3 px-4 text-white text-sm"
                />
                <input
                    value={valor}
                    readOnly
                    className="outline-none focus:ring-2 ring-cyan-300 ring-inset bg-zinc-800 rounded-lg p-3 px-4 text-white text-sm"
                />
            </div>
        </div>
    );
}
