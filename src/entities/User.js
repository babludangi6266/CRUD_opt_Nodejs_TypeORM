const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: { type: "int", primary: true, generated: true },
    name: { type: "varchar" },
    email: { type: "varchar", unique: true },
    password: { type: "varchar" },
    role: { type: "varchar" },
    phone: { type: "varchar" },
    city: { type: "varchar" },
    country: { type: "varchar" }
  }
});

module.exports = User;
