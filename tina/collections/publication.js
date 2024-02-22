/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Publikace",
  name: "publication",
  path: "content/publications",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/publikace/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Název",
    },
    {
      type: "image",
      name: "images",
      label: "Obrázky",
      list: true,
    },
    {
      type: "number",
      name: "year",
      label: "Rok",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "authors",
      label: "Aurtoři",
    },
    {
      type: "string",
      name: "publisher",
      label: "Vydavatel",
    },
    // {
    //   type: "number",
    //   name: "weight",
    //   label: "Pořadí",
    // },
    {
      type: "string",
      name: "link",
      label: "Link",
    },
    {
      type: "string",
      name: "isbn",
      label: "Isbn",
    },
  ],
};
