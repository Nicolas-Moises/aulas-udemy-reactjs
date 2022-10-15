import produtos from "./produtos";

export function ProdutosList(props) {
  const produto = produtos.map((produto, i) => {
    return (
      <tr
        key={produto.id}
        className={`${i % 2 != 0 ? "bg-indigo-500" : "bg-violet-600"}`}
      >
        <td className="text-lg font-semibold text-zinc-300 py-2 text-center">
          {produto.id}
        </td>
        <td className="text-lg font-semibold text-zinc-300 py-2 text-center">
          {produto.produto}
        </td>
        <td className="text-lg font-semibold text-zinc-300 py-2 text-center">
          R$ {produto.preco.toFixed(2)}
        </td>
      </tr>
    );
  });
  return (
    <div className="flex  flex-col gap-4 items-center">
      <h1 className="text-2xl text-zinc-300 font-bold">Tabela Produtos</h1>
      <table className="p-6 w-full border-2 rounded-xl overflow-hidden">
        <thead className="">
          <tr className="bg-indigo-600">
            <th className="py-3 px-4 text-zinc-200 text-2xl">Id</th>
            <th className="py-3 px-4 text-zinc-200 text-2xl">Produto</th>
            <th className="py-3 px-4 text-zinc-200 text-2xl">Preço</th>
          </tr>
        </thead>
        <tbody>{produto}</tbody>
      </table>
    </div>
  );
}
