/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Home Page",
  type: "object",
  name: "page",
  path: "content/page",
  format: "md",
  fields: [
    {
      name: "Nadpis",
      label: "title",
      type: "string",
    },
    {
      name: "Podnadpis",
      label: "title",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "presentation",
      label: "Projekty",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.realisation };
        },
      },
      fields: [
        {
          type: "reference",
          name: "realisation",
          label: "Realisation",
          collections: ["realisation"],
        },
      ],
    },
  ],
  ui: {
    router: () => {
      return `/`;
    },
    allowedActions: {
      create: false,
      delete: false,
    },
  },
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
