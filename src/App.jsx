import { First } from "./components/First";
import { NumberAleatory } from "./components/NumberAleatory";
import { WithParams } from "./components/WithParams";
import { Card } from "./components/Card";
import { ProdutosList } from "./components/ProdutosList";

import "./styles/global.css";

function App() {
  return (
    <div className="w-full bg-zinc-900 flex flex-col justify-center items-center py-7">
      <h1 className="font-black text-5xl mb-7 text-violet-300">
        Exercícios React JS
      </h1>
      <div className="">
        <Card title="Desafio 1">
          <ProdutosList />
        </Card>

        <Card title="Exemplo 1">
          <NumberAleatory min={0} max={60} />
        </Card>

        <Card title="Exemplo 2">
          <WithParams title="Lorem Ipsum" subtitle="Apenas visualização" />
        </Card>

        <Card title="Exemplo 3">
          <First />
        </Card>
      </div>
    </div>
  );
}

export default App;
