/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Návrhy",
  name: "project",
  path: "content/project",
  format: "md",
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
    // {
    //   name: "realisation",
    //   label: "Odkaz na stavbu",
    //   type: "reference",
    //   collections: ["realisation"],
    // },
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
    // {
    //   type: "number",
    //   name: "weight",
    //   label: "Pořadí",
    //   step: 1,
    //   defaultValue: 99,
    // },
  ],
  ui: {
    router: ({ document }) => {
      return `/projekty/${document._sys.filename}`;
    },
  },
};
