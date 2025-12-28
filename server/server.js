const { createServer } = require("http");
const app = require("./app");

const server = createServer(app);

const PORT = process.env.PORT || 5000;

const verifyServer = () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running `);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

verifyServer();