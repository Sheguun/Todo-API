const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const {
	getTodos,
	createTodo,
	updateTodo,
	deleteTodo,
} = require('./controllers/todoController')


// App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL= process.env.MONGODB_URI

// Middlewares
// Convert to Json
app.use(express.json());

app.use(Cors());

// DB config
mongoose
.connect(connectionURL)
.then(() => {
	app.listen(port, () => console.log(`Running on port: ${port}`))
})
.catch((err) => {
	console.log(err);
});

// API Endpoints

// Get todos list
app.get("/todos", getTodos);

// Create a new Todo
app.put("/todos", createTodo);

// Update a Todo
app.post("/todos:id", updateTodo);

// Delete a Todo
app.delete("/todos:id", deleteTodo);
