/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Výpis staveb",
  type: "object",
  name: "realizations",
  path: "content/list_realizations",
  format: "md",
  ui: {
    router: () => {
      return `/realizace`;
    },
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "list",
      label: "Výpis staveb",
      description:
        "Nový navrh je třeba vytvořit v sekci Návrhy a přidat do seznamu.",
      type: "object",
      list: true,
      defaultItem: {
        item: "content/s/park-4Dvory.md",
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
          label: "Realisation",
          collections: ["realisation"],
        },
      ],
    },
  ],

  // fields: [
  //   {
  //     name: "index",
  //     label: "Pořadí",
  //     type: "object",
  //     list: true,
  //     fields: [
  //       {
  //         type: "reference",
  //         name: "realisation",
  //         label: "Realisation",
  //         collections: ["realisation"],
  //       },
  //     ],
  //   },
  // ],
};
