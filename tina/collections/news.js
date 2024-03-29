/**
 * @type {import('tinacms').Collection}
 */
export default {
  type: "object",
  format: "yaml",
  path: "content/news",
  name: "news",
  label: "Ve zprávách",
  ui: {
    router: ({ document }) => {
      return `/zpravy/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titulek",
    },
    {
      type: "selection",
      name: "project",
      label: "Projekt o kterém se mluví",
      type: "reference",
      collections: ["realisation", "project"],
    },
    {
      type: "number",
      name: "year",
      label: "Rok",
    },
    {
      type: "image",
      name: "thumb",
      label: "Obrázek",
    },
    {
      type: "string",
      name: "source",
      label: "Zdroj",
    },
    {
      type: "datetime",
      name: "date",
      label: "Datum vydání",
    },
    {
      type: "string",
      name: "link",
      label: "Odkaz na stránku",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "copy",
      label: "Kopie článku",
    },
  ],
};
