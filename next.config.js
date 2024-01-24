module.exports = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"], // replace with your Cloudinary URL
  },
};
