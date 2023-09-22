# Social Network API Assignment

This is the README documentation for the Social Network API assignment. This project is an API for a social networking platform that allows users to create accounts, share thoughts, interact with other users, and more.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
  - [Directory Structure](#directory-structure)
  - [Main Scripts](#main-scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User account creation and management.
- Posting, editing, and deleting thoughts.
- Adding reactions (likes, dislikes, etc.) to thoughts.
- Establishing friend connections between users.
- Viewing a user's thoughts and friends.

## Getting Started

### Prerequisites

- Node.js installed (version X.X.X)
- MongoDB installed and running

social-network-api/
│
├── config/
│   └── connection.js
│
├── controllers/
│   └── user-controller.js
│   └── thought-controller.js
│   └── reaction-controller.js
│
├── models/
│   └── User.js
│   └── Thought.js
│   └── Reaction.js
│
├── routes/
│   └── api/
│       └── index.js
│       └── user-routes.js
│       └── thought-routes.js
│       └── reaction-routes.js
│
├── app.js
└── README.md


# Main Scripts

- `app.js`: Main application file where Express.js app is configured.
- `config/connection.js`: Configuration file for connecting to the MongoDB database.
- `controllers/`: Contains controller functions for handling various API endpoints.
- `models/`: Contains Mongoose models for User, Thought, and Reaction.
- `routes/api/`: Defines API routes for users, thoughts, and reactions.
- `routes/api/index.js`: Main API route that aggregates other route files.
- `routes/api/user-routes.js`, `routes/api/thought-routes.js`, `routes/api/reaction-routes.js`: Route files for user-related, thought-related, and reaction-related endpoints.

# API Endpoints

## User Routes

- `POST /api/users`: Create a new user.
- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a single user by ID.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId`: Add a friend connection.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend connection.

## Thought Routes

- `POST /api/thoughts`: Create a new thought.
- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by ID.
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.

## Reaction Routes

- `POST /api/thoughts/:thoughtId/reactions`: Create a reaction on a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Delete a reaction from a thought.

# Contributing

Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

# License

This project is licensed under the MIT License.
