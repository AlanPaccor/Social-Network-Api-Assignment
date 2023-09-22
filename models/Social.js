const { Schema, mongoose } = require('mongoose');

// Regular expression to validate email addresses
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: 'Invalid username',
    trim: true,
  },
  email: {
    type: String,
    required: 'Invalid email',
    unique: true,
    lowercase: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
});

// Define the reaction schema
const reactionSchema = new mongoose.Schema({
  reactionId: { type: Schema.Types.ObjectId },
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, timestamps: true },
});

// Define the thought schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now, timestamps: true },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

// Create the User and Thought models
const User = mongoose.model('user', userSchema);
const Thought = mongoose.model('thought', thoughtSchema);

// Export the User and Thought models
module.exports = { User, Thought };
