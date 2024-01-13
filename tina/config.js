import { defineConfig } from "tinacms";
import page from "./collections/page";
import post from "./collections/post";
import realisation from "./collections/realisation";
import project from "./collections/project";
import movie from "./collections/movie";
import book from "./collections/book";
import publication from "./collections/publication";
import news from "./collections/news";

export const config = defineConfig({
  clientId: "c2fd4b33-76f5-4264-bd79-87290b8cc5b8", //process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: "main",
  //process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
  //process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
  //process.env.HEAD, // Netlify branch env
  token: "faa28d2ec1cb3b18b9eb04b76e7db34c387e7317", //,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    // tina: {
    //   publicFolder: "public",
    //   mediaRoot: "uploads",
    // },
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
      post,
      realisation,
      project,
      movie,
      book,
      publication,
      news,
    ],
  },
});

export default config;
