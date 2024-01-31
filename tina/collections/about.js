/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "About",
  type: "object",
  name: "about",
  path: "content/about",
  format: "md",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "description",
      label: "Description",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "member",
      label: "Member",
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
          label: "Photo",
        },
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "position",
          label: "Profession",
        },
        {
          type: "string",
          name: "phone",
          label: "Phone",
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
