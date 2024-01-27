
Certainly! Below is the README file content in Markdown format for your Social Media API:

markdown
Copy code
# Social Media API

The Social Media API is a RESTful service designed to provide endpoints for managing users, thoughts, reactions, and friendships within a social media platform.

## Table of Contents

- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [Video](#video)
## Getting Started

To get started with the Social Media API, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/social-media-api.git

markdown
Copy code

2. Install dependencies:

cd social-media-api
npm install

markdown
Copy code

3. Configure environment variables:

Create a `.env` file in the root directory and configure environment variables such as database connection string, JWT secret, etc.

4. Start the server:

npm start

sql
Copy code

The server should now be running at `http://localhost:3000`.

## Endpoints

The following endpoints are available:

- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.
- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:id`: Get a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:id`: Update a thought by ID.
- `DELETE /api/thoughts/:id`: Delete a thought by ID.
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user.

## Authentication

The Social Media API uses JSON Web Tokens (JWT) for authentication. To access protected endpoints, include a valid JWT in the `Authorization` header of the request.

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format for each request. Error responses include a `message` field providing details about the error.

## Examples

### Create a User

```http
POST /api/users
Content-Type: application/json

{
"username": "johndoe",
"email": "john.doe@example.com"
}
Create a Thought
http
Copy code
POST /api/thoughts
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "thoughtText": "This is a new thought.",
  "username": "johndoe"
}
            Add a Reaction to a Thought
http
Copy code
POST /api/thoughts/:thoughtId/reactions
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "reactionBody": "Interesting!",
  "username": "janedoe"
}


``````
## Video
https://drive.google.com/file/d/1G2SpcsKBTbRenDoGn-sumS_KL3oxq-Q3/view