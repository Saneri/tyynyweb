var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
  name: 'User',

  columns: {
    id: {
      primary: true,
      type: 'text',
      generated: false
    },
    name: {
      type: 'varchar'
    }
  }
});
