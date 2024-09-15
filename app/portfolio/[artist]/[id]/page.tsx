import data from "../../../lib/db.json"; // Ajuste o caminho para o arquivo JSON

// Função para gerar metadados SEO dinamicamente
export async function generateMetadata({ params }: { params: { id: string } }) {
  const itemId = params.id;
  const item = data.portfolio.find(
    (portfolioItem) => portfolioItem.id === parseInt(itemId)
  );

  if (!item) {
    return {
      title: "Item não encontrado | Splash Tattoo",
      description: "O item do portfólio não foi encontrado.",
    };
  }

  return {
    title: item.metaTitle, // Utilizando o metaTitle do JSON
    description: item.metaDescription, // Utilizando o metaDescription do JSON
  };
}

// Este componente não precisa ser um "Client Component", pois só exibe os dados
export default function PortfolioItemPage({
  params,
}: {
  params: { id: string };
}) {
  const itemId = params.id;

  // Busca o item correspondente pelo ID no arquivo JSON
  const item = data.portfolio.find(
    (portfolioItem: { id: number }) => portfolioItem.id === parseInt(itemId)
  );

  if (!item) {
    return <div className="text-center text-red-600">Item não encontrado</div>;
  }

  return (
    <div className="min-h-screen  text-neutral-content">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-red-600">{item.title}</h1>
          <p className="mt-4 text-lg">{item.description}</p>
          <img
            src={item.image}
            alt={item.title}
            className="rounded-lg my-10"
            width={600}
            height={600}
          />
          <p className="text-lg">Artista: {item.artist}</p>
          <p className="text-lg">Estilo: {item.style}</p>
        </div>
      </div>
    </div>
  );
}
