/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Knihy",
  name: "book",
  path: "content/books",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/knihy/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Název",
    },
    {
      type: "string",
      name: "desription",
      label: "Popis",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "authors",
      label: "Autoři",
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
      name: "publisher",
      label: "Vydavatel",
    },
    {
      type: "number",
      name: "year",
      label: "Rok",
    },
    {
      type: "string",
      name: "link",
      label: "Odkaz na vydavatelství",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "isbn",
      label: "ISBN",
    },
    {
      type: "number",
      name: "weight",
      label: "Pořadí",
    },
  ],
};
