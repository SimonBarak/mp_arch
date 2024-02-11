/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Návrhy",
  name: "project",
  path: "content/project",
  format: "md",
  fields: [
    // {
    //   type: "number",
    //   name: "weight",
    //   label: "Pořadí",
    // },
    {
      type: "string",
      name: "title",
      label: "Název",
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
      type: "string",
      name: "odkaz_na_navrh",
      label: "Odkaz na realizaci/návrh",
    },
    {
      type: "object",
      name: "awards",
      label: "Ocenění",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "placement",
          label: "Placement",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
        {
          type: "number",
          name: "year",
          label: "Year",
        },
      ],
    },
    {
      type: "object",
      name: "media",
      label: "Projekt v mediích",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "number",
      name: "year",
      label: "Rok",
    },
    {
      type: "string",
      name: "size",
      label: "Velikost",
    },
    {
      type: "string",
      name: "price",
      label: "Cena",
    },
    {
      type: "image",
      name: "images",
      label: "Obrázky",
      list: true,
    },
    {
      type: "number",
      name: "latitude",
      label: "Latitude",
    },
    {
      type: "number",
      name: "longitude",
      label: "Longitude",
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
  ],
  ui: {
    router: ({ document }) => {
      return `/projekty/${document._sys.filename}`;
    },
  },
};
