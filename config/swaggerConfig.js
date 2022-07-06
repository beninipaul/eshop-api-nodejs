const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const API_VERSION = process.env.API_VERSION;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Light eshop API",
      version: "1.0.0",
      description: "A light backend eshop API",
      termsOfService: "https://github.com/beninipaul/eshop-api-nodejs",
      contact: {
        name: "API Support",
        url: "https://github.com/beninipaul/eshop-api-nodejs",
        email: "beninipaul.ce@gmail.com",
      },
    },

    servers: [
      {
        url: `http://localhost:3000${API_VERSION}`,
        description: "Eshop API Documentation",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUI, specs };
