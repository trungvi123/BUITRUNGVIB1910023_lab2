const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    URI:
      process.env.MONGODB_URI ||
      "mongodb+srv://admin:uh02hELNXTJYuW88@cluster0.ohupeby.mongodb.net/?retryWrites=true&w=majority",
  },
};

export default config;
