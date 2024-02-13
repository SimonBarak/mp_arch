/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "O studiu",
  type: "object",
  name: "about",
  path: "content/about",
  format: "md",
  fields: [
    {
      name: "title",
      label: "Nazev",
      type: "string",
    },
    {
      name: "description",
      label: "Popis",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "member",
      label: "Členové",
      type: "object",
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: `${item?.name}` };
        },
      },
      list: true,
      fields: [
        {
          type: "image",
          name: "photo",
          label: "Fotka",
        },
        {
          type: "string",
          name: "name",
          label: "Jméno",
        },
        {
          type: "string",
          name: "position",
          label: "Profese",
        },
        {
          type: "string",
          name: "phone",
          label: "Telefon",
        },
        {
          type: "string",
          name: "resume",
          label: "Résumé",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      name: "collaborations",
      label: "Collaborations",
      type: "object",
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: `${item?.name}` };
        },
      },
      list: true,
      fields: [
        {
          name: "name",
          label: "Jméno",
          type: "string",
        },
        {
          name: "profession",
          label: "Profese",
          type: "string",
        },
      ],
    },
  ],
  ui: {
    router: () => {
      return `/studio`;
    },
  },
};
