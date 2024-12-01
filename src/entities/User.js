// const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
// const { IsEmail, IsNotEmpty, MinLength } = require("class-validator");

// @Entity("users")
// class User {
//   @PrimaryGeneratedColumn()
//   id;

//   @Column()
//   @IsNotEmpty({ message: "Name is required" })
//   name;

//   @Column({ unique: true })
//   @IsEmail({}, { message: "Invalid email format" })
//   email;

//   @Column()
//   @MinLength(6, { message: "Password must be at least 6 characters" })
//   password;

//   @Column()
//   @IsNotEmpty({ message: "Role is required" })
//   role;

//   @Column()
//   phone;

//   @Column()
//   city;

//   @Column()
//   country;
// }

// module.exports = User;

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
