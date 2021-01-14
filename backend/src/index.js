const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const typeorm = require('typeorm');
const dotenv = require('dotenv');

const router = require('./routes/index');

dotenv.config();
const app = express();
const port = process.env.PORT_TYYNY_BACKEND || 4000;

app.use(cors());
app.use(bodyParser.json());

function initDatabase() {
  return typeorm.createConnection({
    type: 'postgres',
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
    entities: [Lunch, Participant, User, Restaurant, FoodType],
    migrations: [__dirname + '/migrations/**/*.js'],
    cli: {
      migrationsDir: 'src/migrations'
    },
    migrationsTableName: 'Migrations',
    synchronize: true,
    migrationsRun: true,
    logging: false
  });
}

//initDatabase().then(() => {
app.listen(port, () =>
  console.log(`TyynyWeb backend listening on port ${port}`)
);

app.use('/', router);
//});
