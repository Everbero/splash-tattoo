const data = require('./app/lib/db.json'); // Importando o arquivo de dados do portfólio

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.splashtattoo.com.br',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,

  // Função para gerar paths adicionais (rotas dinâmicas) para o sitemap
  additionalPaths: async (config) => {
    // Gerando as rotas para cada item do portfólio com base no db.json
    const portfolioPaths = data.portfolio.map((item) => ({
      loc: `/portfolio/${item.artist.toLowerCase().replace(/ /g, '-')}/${item.id}`, // Gerando a URL de cada item
      changefreq: 'monthly',
      priority: 0.8, // Você pode ajustar a prioridade individual de cada página
    }));

    return portfolioPaths;
  },
};
