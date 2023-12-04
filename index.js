const app = require('./app');
const index = express();
const port = 5000;
      
  app.listen(port, (err) => {
    if (err) {
      console.error("Error:", err.message);
    } else {
      console.info(`Server is listening on ${port}`);
    }
  });