const { Idea, User } = require('../models/Networking');

module.exports = {
  async fetchAllIdeas(req, res) {
    try {
      const ideas = await Idea.find();
      res.json(ideas);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async fetchSingleIdea(req, res) {
    try {
      const idea = await Idea.findOne({ _id: req.params.ideaId });

      if (!idea) {
        return res.status(404).json({ message: 'No idea found with that ID' });
      }

      res.json(idea);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Create a new concept
  async createIdea(req, res) {
    try {
      const databaseIdea = await Idea.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { ideas: databaseIdea._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'Idea created, but no users found with this ID' });
      }

      res.json(databaseIdea);
    } catch (error) {
      res.status(500).json(error);
      console.log("An error occurred.")
    }
  },
  async updateIdea(req, res) {
    try {
      const databaseIdea = await Idea.findOneAndUpdate(req.body);
      res.json(databaseIdea);
    } catch (error) {
      res.status(500).json(error);
      console.log("An error occurred.")
    }
  },
  async removeIdea(req, res) {
    try {
      const databaseIdea = await Idea.deleteOne(req.body);
      res.json(databaseIdea);
    } catch (error) {
      res.status(500).json(error);
      console.log("An error occurred.")
    }
  }
};
