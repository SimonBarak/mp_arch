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
      type: "string",
      name: "category",
      label: "Category",
      options: ["Publikace", "Stavba", "Návrh", "Film"],
    },
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
      return `/movies/${document._sys.filename}`;
    },
  },
};
