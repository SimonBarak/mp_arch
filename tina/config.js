import { defineConfig } from "tinacms";
import page from "./collections/page";
import realisation from "./collections/realisation";
import realizations from "./collections/realizations";
import project from "./collections/project";
import projects from "./collections/projects";
import movie from "./collections/movie";
import book from "./collections/book";
import publication from "./collections/publication";
import news from "./collections/news";
import award from "./collections/award";
import about from "./collections/about";
import contact from "./collections/contact";

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: "main",
  //process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
  //process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
  //process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      page,
      realisation,
      realizations,
      project,
      projects,
      movie,
      book,
      publication,
      news,
      award,
      about,
      contact,
    ],
  },
});

export default config;
