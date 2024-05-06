/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Výpis návrhů",
  type: "object",
  name: "projects",
  path: "content/projects",
  format: "md",
  ui: {
    router: () => {
      return `/projekty`;
    },
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "list",
      label: "Výpis návrhů",
      description:
        "Nový navrh je třeba vytvořit v sekci Návrhy a přidat do seznamu.",
      type: "object",
      list: true,
      defaultItem: {
        item: "content/project/ceske-budejovice-rozsireni-parku-4dvory.md",
      },
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.item };
        },
      },
      fields: [
        {
          type: "reference",
          name: "item",
          label: "Projekt",
          collections: ["project"],
        },
      ],
    },
  ],
};
