/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Realizace",
  name: "realisation",
  path: "content/realisations",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/realizace/${document._sys.filename}`;
    },
  },
  indexes: [
    {
      name: "weight",
      fields: [{ name: "weight" }],
    },
  ],
  fields: [
    {
      type: "number",
      name: "weight",
      label: "Order",
      description: "Enter a weight for post sorting",
      step: 1,
      defaultValue: 99,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Podtitulek",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "project",
      label: "Návrh projektu",
      type: "reference",
      collections: ["project"],
    },
    {
      type: "object",
      name: "awards",
      label: "Awards",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "placement",
          label: "Placement",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
        {
          type: "number",
          name: "year",
          label: "Year",
        },
      ],
    },
    {
      name: "awardsx",
      label: "Oceneni",
      type: "object",
      list: true,
      fields: [
        {
          type: "reference",
          name: "award",
          label: "Award",
          collections: ["award"],
        },
      ],
    },
    {
      name: "testnews",
      label: "Projektu ve zpávách",
      type: "object",
      list: true,
      fields: [
        {
          type: "reference",
          name: "news",
          label: "News",
          collections: ["news"],
        },
      ],
    },
    {
      type: "number",
      name: "year",
      label: "Year",
    },
    {
      type: "string",
      name: "size",
      label: "Size",
    },
    {
      type: "string",
      name: "price",
      label: "Price",
    },
    {
      type: "image",
      name: "images",
      label: "Images",
      list: true,
    },
    {
      type: "number",
      name: "latitude",
      label: "Latitude",
      description: "Najdete na latlong.net",
    },
    {
      type: "number",
      name: "longitude",
      label: "Longitude",
      description: "Najdete na latlong.net",
    },
    {
      type: "string",
      name: "authors",
      label: "Authors",
    },
    {
      type: "string",
      name: "investor",
      label: "Investor",
    },
    {
      type: "string",
      name: "visualization",
      label: "Visualization",
    },
    {
      type: "string",
      name: "collaborations",
      label: "Collaborations",
      list: true,
    },
    {
      type: "string",
      name: "photo",
      label: "Photo",
    },
  ],
};
