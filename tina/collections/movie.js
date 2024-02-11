/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Filmy",
  name: "movie",
  path: "content/movies",
  format: "md",
  fields: [
    {
      type: "number",
      name: "weight",
      label: "Pořadí",
    },
    {
      type: "string",
      name: "title",
      label: "Nazev",
    },
    {
      type: "string",
      name: "director",
      label: "Režisér",
    },
    {
      type: "number",
      name: "year",
      label: "Rok",
    },
    {
      type: "image",
      name: "images",
      label: "Obrazky",
      list: true,
    },
    {
      type: "string",
      name: "source",
      label: "Zdroj",
    },
    {
      type: "string",
      name: "link",
      label: "Link",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "description",
      label: "Popis",
      ui: {
        component: "textarea",
      },
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/filmy/${document._sys.filename}`;
    },
  },
};
