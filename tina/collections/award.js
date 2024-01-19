/**
 * @type {import('tinacms').Collection}
 */
export default {
  type: "object",
  format: "yaml",
  path: "content/awards",
  name: "award",
  label: "Ocenění",
  ui: {
    router: ({ document }) => {
      return `/oceneni/${document._sys.filename}`;
    },
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "thumb",
      label: "Obrázek",
      type: "image",
    },
    {
      name: "year",
      label: "Year",
      type: "number",
    },
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "placement",
      label: "Placement",
      type: "string",
    },
    {
      name: "link",
      label: "Link",
      type: "string",
    },
    {
      name: "realisation",
      label: "Realizace",
      type: "reference",
      collections: ["realisation"],
    },
    {
      label: "Projekt",
      name: "project",
      type: "reference",
      collections: ["project"],
    },
  ],
};
