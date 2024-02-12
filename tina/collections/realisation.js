/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Staby",
  name: "realisation",
  path: "content/realisations",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/realizace/${document._sys.filename}`;
    },
  },
  indexes: [
    {
      name: "weight",
      fields: [{ name: "weight" }],
    },
  ],
  fields: [
    {
      type: "string",
      name: "title",
      label: "Název",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Podtitulek",
    },
    {
      type: "string",
      name: "description",
      label: "Popis",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "images",
      label: "Obrázky",
      list: true,
    },
    {
      type: "string",
      name: "price",
      label: "Cena",
    },
    {
      type: "number",
      name: "year",
      label: "Rok",
    },
    {
      type: "string",
      name: "size",
      label: "Rozloha",
    },
    {
      type: "string",
      name: "authors",
      label: "Autoři",
    },
    {
      type: "string",
      name: "investor",
      label: "Investor",
    },
    {
      type: "string",
      name: "visualization",
      label: "Visualizace",
    },
    {
      type: "string",
      name: "collaborations",
      label: "Spolupráce",
      list: true,
    },
    {
      type: "string",
      name: "photo",
      label: "Fotografie",
    },
    {
      name: "project",
      label: "Odkaz na projekt",
      type: "reference",
      collections: ["project"],
    },
    {
      name: "awardsx",
      label: "Ocenění",
      type: "object",
      list: true,
      fields: [
        {
          type: "reference",
          name: "award",
          label: "Award",
          collections: ["award"],
        },
      ],
    },
    {
      name: "testnews",
      label: "Projektu ve zpávách",
      type: "object",
      list: true,
      defaultItem: {
        news: "content/news/vitezny-navrh-architektonicka-soutez.yaml",
      },
      fields: [
        {
          type: "reference",
          name: "news",
          label: "News",
          collections: ["news"],
        },
      ],
    },
    {
      type: "number",
      name: "latitude",
      label: "Latitude",
      description: "Najdete na latlong.net",
    },
    {
      type: "number",
      name: "longitude",
      label: "Longitude",
      description: "Najdete na latlong.net",
    },
    {
      type: "number",
      name: "weight",
      label: "Pořadí",
      step: 1,
      defaultValue: 99,
      hidden: true,
    },
  ],
};
