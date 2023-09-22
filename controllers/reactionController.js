const { Emotion } = require('../models/Emotional');

module.exports = {
  async addEmotion(req, res) {
    try {
      const databaseEmotion = await Emotion.create(req.body);
      const emotionInstance = await Emotion.findOneAndUpdate(
        { _id: req.body.emotionId },
        { $push: { emotions: databaseEmotion.emotionId } },
        { new: true }
      );

      if (!emotionInstance) {
        return res
          .status(404)
          .json({ message: 'Emotion added, but no matching instances found' });
      }

      res.json(databaseEmotion);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred.' });
      console.log("An error occurred.")
    }
  },
  async removeEmotion(req, res) {
    try {
      const databaseEmotion = await Emotion.deleteOne(req.body);
      res.json(databaseEmotion);
    } catch (error) {
      res.status(500).json(error);
      console.log("An error occurred.")
    }
  }
};
