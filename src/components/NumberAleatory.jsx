
export function NumberAleatory(props) {
    //componente que gera um número aleatório

    const { min, max } = props;

    
    const numberChosen = parseInt(Math.random() * (max - min)) + min;

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-zinc-300 font-bold text-2xl">
            O valor entre {min} e {max} sorteado foi o: 
        </h1>
        <span className="text-5xl font-black text-violet-400">
          {numberChosen}
        </span>
      </div>
    )
}

  
