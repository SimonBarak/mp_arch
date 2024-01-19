/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Contact",
  type: "object",
  name: "contact",
  path: "content/contact",
  format: "yaml",
  fields: [
    {
      name: "image",
      label: "Obrazek",
      type: "image",
    },
    {
      name: "email",
      label: "Email",
      type: "string",
    },
    {
      name: "street",
      label: "Street",
      type: "string",
    },
    {
      name: "city",
      label: "City",
      type: "string",
    },
    {
      name: "post_code",
      label: "Post Code",
      type: "string",
    },
    {
      name: "county",
      label: "County",
      type: "string",
    },
    {
      name: "studiopin",
      label: "Studio Pin",
      type: "object",
      fields: [
        {
          name: "longitude",
          label: "Longitude",
          type: "number",
        },
        {
          name: "latitude",
          label: "Latitude",
          type: "number",
        },
      ],
    },
    {
      name: "phones",
      label: "Telefony",
      type: "object",
      list: true,
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: `${item?.person}, ${item?.phone}` };
      },
      fields: [
        {
          name: "person",
          label: "Jméno",
          type: "string",
        },
        {
          name: "phone",
          label: "Telefon",
          type: "string",
        },
      ],
    },
  ],
  ui: {
    router: () => {
      return `/kontakt`;
    },
  },
};
