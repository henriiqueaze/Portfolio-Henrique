import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

const staticRoutes = [
  { path: "work", title: "Trabalhos — Henrique Azevedo", description: "Arquivo de projetos e produtos digitais desenvolvidos por Henrique Azevedo." },
  { path: "work/cook-it", title: "Cook—It — Estudo de caso", description: "Plataforma que transforma ingredientes disponíveis em sugestões inteligentes de receitas." },
  { path: "work/student-progress", title: "StudentProgress — Estudo de caso", description: "Sistema de gestão acadêmica para acompanhar alunos, notas e evolução." },
  { path: "work/sociau", title: "Sociau — Estudo de caso", description: "Produto digital que conecta organizações de resgate animal e possíveis adotantes." },
  { path: "work/volumtarium", title: "Volumtarium — Estudo de caso", description: "Rede para descobrir oportunidades sociais por perfil, interesses e localização." },
  { path: "work/task-manager", title: "Task Manager — Estudo de caso", description: "Aplicação desktop para organizar e acompanhar atividades diárias." },
  { path: "work/pum", title: "P.U.M. — Estudo de caso", description: "Plataforma acadêmica para integrar alunos, monitores, atividades e cursos." },
];

const homeRoute = {
  path: "",
  title: "Henrique Azevedo — Desenvolvedor Full-Stack",
  description: "Portfólio de Henrique Azevedo, desenvolvedor full-stack especializado em produtos digitais, sistemas e APIs.",
};

function escapeXml(value) {
  const entities = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "\"": "&quot;", "'": "&apos;" };
  return value.replace(/[<>&"']/g, (character) => entities[character]);
}

function applyMetadata(html, route, siteUrl) {
  const canonicalUrl = siteUrl ? `${siteUrl}/${route.path}` : null;
  let output = html
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

  if (canonicalUrl) {
    output = output
      .replace(/content="\/og\.png"/g, `content="${siteUrl}/og.png"`)
      .replace("</head>", `    <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
  }
  return output;
}

function staticRoutePages(siteUrl) {
  return {
    name: "static-route-pages",
    closeBundle() {
      const outputDirectory = path.resolve("dist");
      const template = fs.readFileSync(path.join(outputDirectory, "index.html"), "utf8");
      fs.writeFileSync(path.join(outputDirectory, "index.html"), applyMetadata(template, homeRoute, siteUrl), "utf8");

      for (const route of staticRoutes) {
        const routeDirectory = path.join(outputDirectory, route.path);
        fs.mkdirSync(routeDirectory, { recursive: true });
        fs.writeFileSync(path.join(routeDirectory, "index.html"), applyMetadata(template, route, siteUrl), "utf8");
      }

      const robots = ["User-agent: *", "Allow: /"];
      if (siteUrl) {
        const routes = ["", ...staticRoutes.map((route) => route.path)];
        const sitemap = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...routes.map((route) => `  <url><loc>${escapeXml(`${siteUrl}/${route}`)}</loc></url>`),
          "</urlset>",
        ].join("\n");
        fs.writeFileSync(path.join(outputDirectory, "sitemap.xml"), sitemap, "utf8");
        robots.push(`Sitemap: ${siteUrl}/sitemap.xml`);
      }
      fs.writeFileSync(path.join(outputDirectory, "robots.txt"), robots.join("\n"), "utf8");
    },
  };
}

export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, process.cwd(), "");
  const siteUrl = environment.VITE_SITE_URL?.replace(/\/$/, "");

  return {
    plugins: [react(), svgr(), tailwindcss(), staticRoutePages(siteUrl)],
    base: "/",
  };
});
