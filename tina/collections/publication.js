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
      label: "title",
    },
    {
      type: "image",
      name: "images",
      label: "images",
      list: true,
    },
    {
      type: "number",
      name: "year",
      label: "year",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "authors",
      label: "authors",
    },
    {
      type: "string",
      name: "publisher",
      label: "publisher",
    },
    {
      type: "number",
      name: "weight",
      label: "priority",
    },
    {
      type: "string",
      name: "link",
      label: "link",
    },
    {
      type: "string",
      name: "isbn",
      label: "isbn",
    },
  ],
};
