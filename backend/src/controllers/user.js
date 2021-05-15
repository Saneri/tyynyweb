const bcrypt = require('bcrypt');

const db = require('../db');

async function create(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ error: 'username or password missing' });
    return;
  } else {
    const user = {
      username: req.body.username,
      hashedPassword: await bcrypt.hash(req.body.password, 10)
    };

    await db.models.user.create(user);
    res.status(200).json({ info: `User ${user.username} succesfully created` });
  }
}

async function getAll(req, res) {
  const users = await db.models.user.findAll();
  res.status(200).json(users);
}

module.exports = {
  create,
  getAll
};
