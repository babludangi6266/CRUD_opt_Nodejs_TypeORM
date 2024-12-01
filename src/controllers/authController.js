const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validate } = require("class-validator");
const User = require("../entities/User");
const AppDataSource = require("../config/database");

const register = async (req, res) => {
  const { name, email, password, role, phone, city, country } = req.body;
  
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.create({ name, email, password, role, phone, city, country });

  // Validate user input
  const errors = await validate(user);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // Hash password
  user.password = await bcrypt.hash(password, 10);
  
  try {
    await userRepository.save(user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);
  
    const user = await userRepository.findOneBy({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  };
  
  

module.exports = { register , login};
