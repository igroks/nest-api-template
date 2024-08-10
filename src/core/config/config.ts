export default () => ({
  config: {
    app: {
      port: process.env.APP_PORT,
      name: process.env.APP_NAME,
      version: process.env.APP_VERSION,
      company: {
        name: process.env.COMPANY_NAME,
        website: process.env.COMPANY_WEBSITE,
      },
      env: process.env.NODE_ENV,
    },
  },
});
