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
      return `/oceneni`;
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
      label: "Rok",
      type: "number",
    },
    {
      name: "title",
      label: "Název",
      type: "string",
    },
    {
      name: "placement",
      label: "Umístění",
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
