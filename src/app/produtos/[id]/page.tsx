// produtos/[id]/page.tsx
type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
  };
  
  type PageParams = {
    params: {
      id: string;
    };
  };
  
  export default async function ProdutoPage({ params }: PageParams) {
    const { id } = await params

    const response = await fetch(
      `https://api.origamid.online/produtos/${id}`,
    );
    const data = (await response.json()) as Produto;
  
    return (
      <main>
        <h1>Produto: {id}</h1>
        <h2>R$ {data.preco}</h2>
        <p>{data.descricao}</p>
      </main>
    );
  }
  