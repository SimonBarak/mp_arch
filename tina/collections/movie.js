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
      label: "Weight",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "director",
      label: "Director",
    },
    {
      type: "number",
      name: "year",
      label: "Year",
    },
    {
      type: "image",
      name: "images",
      label: "Images",
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
      label: "Description",
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
