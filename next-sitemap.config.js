module.exports = {
    siteUrl: 'https://www.splashtattoo.com.br',
    generateRobotsTxt: true, // Gera também um arquivo robots.txt
    changefreq: 'yearly', // Frequência de mudança das páginas
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.splashtattoo.com.br/sitemap-portfolio.xml', // Exemplo de sitemaps adicionais
      ],
    },
  };
  