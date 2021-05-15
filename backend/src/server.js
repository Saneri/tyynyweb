const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const sequelize = require('./db');
const router = require('./routes/index');

dotenv.config();

const app = express();
const port = process.env.PORT_TYYNY_BACKEND || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function initDatabase() {
  console.log(`Synching with database...`);
  try {
    await sequelize.sync({ force: true }).then(() => {
      console.log('Drop and re-sync db.');
    });

    console.log('Database sync OK!');
  } catch (error) {
    console.log('Unable to sync the database:');
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await initDatabase();

  app.listen(port, () =>
    console.log(`TyynyWeb backend listening on port ${port}`)
  );

  app.use('/', router);
}

init();
