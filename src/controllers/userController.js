const AppDataSource = require("../config/database");
const User = require("../entities/User");

const listUsers = async (req, res) => {
  const { search, country } = req.query;
  const userRepository = AppDataSource.getRepository(User);

  let query = userRepository.createQueryBuilder("user");

  // Search by name or email
  if (search) {
    query = query.where("user.name LIKE :search OR user.email LIKE :search", { search: `%${search}%` });
  }

  // Filter by country
  if (country) {
    query = query.andWhere("user.country = :country", { country });
  }

  try {
    const users = await query.getMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

const getUserDetails = async (req, res) => {
    const { id } = req.params;
    const userRepository = AppDataSource.getRepository(User);
  
    try {
      const user = await userRepository.findOneBy({ id });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the logged-in user is an Admin or fetching their own details
      if (req.user.role !== "Admin" && req.user.id !== user.id) {
        return res.status(403).json({ message: "Access denied" });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving user details" });
    }
  };
  

module.exports = { listUsers , getUserDetails};
