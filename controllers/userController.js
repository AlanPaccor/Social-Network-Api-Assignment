const { Person } = require('../models/Community');

module.exports = {
  // Retrieve all users
  async fetchUsers(req, res) {
    try {
      const users = await Person.find();
      res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Retrieve a single user by their ID
  async fetchSingleUser(req, res) {
    try {
      const user = await Person.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await Person.create(req.body);
      res.json(dbUserData);
    } catch (error) {
      res.status(500).json(error);
      console.log("An error occurred.");
    }
  },
  // Update user information
  async updateUser(req, res) {
    try {
      const dbUserData = await Person.findOneAndUpdate(req.body);
      res.json(dbUserData);
    } catch (error) {
      res.status(500).json(error);
      console.log("An error occurred.");
    }
  },
  // Delete a user
  async removeUser(req, res) {
    try {
      const dbUserData = await Person.deleteOne(req.body);
      res.json(dbUserData);
    } catch (error) {
      res.status(500).json(error);
      console.log("An error occurred.");
    }
  }
};
