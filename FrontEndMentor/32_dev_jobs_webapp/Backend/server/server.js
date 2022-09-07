require('dotenv').config();
// const connectDB = require('./config/db');
const jsonData = require('./dev-data/data.json');

const app = require('./app');
// connectDB();

const PORT = 3005 || process.env.NODE_DOCKER_PORT;

// app.get('/', (req, res) => res.send('hello Simon!'));
app.get('/', (req, res) => res.json(jsonData));

app.listen(PORT, () => {
  console.log(
    `Server running successfuly in ${process.env.NODE_ENV} mode on Port ${PORT}`
  );
});
