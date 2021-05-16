const _ = require('lodash');
const bcrypt = require('bcrypt');

const db = require('../db');

async function create(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'username or password missing' });
  }

  if (!_.inRange(req.body.username.length, 3, 20)) {
    return res
      .status(400)
      .json({ error: 'username length must be between 3 and 20' });
  }

  const user = {
    username: req.body.username,
    hashedPassword: await bcrypt.hash(req.body.password, 10)
  };
  await db.models.user.create(user);
  res.status(200).json({ info: `User ${user.username} succesfully created` });
}

async function getAll(req, res) {
  const users = await db.models.user.findAll();
  res.status(200).json(users);
}

async function login(req, res) {
  const user = await db.models.user.findOne({
    where: {
      username: req.body.username
    }
  });

  if (!user) {
    return res.status(403).end();
  }

  const match = bcrypt.compareSync(
    req.body.password,
    user.dataValues.hashedPassword
  );
  if (match) {
    res.status(200).end();
  } else {
    res.status(403).end();
  }
}

module.exports = {
  create,
  getAll,
  login
};
