const toDoModel = require("../models/ToDoModel");

module.exports.getTodo = async (req, res) => {
	const toDo = await toDoModel.find();
	res.send(toDo);
};

module.exports.saveTodo = async (req, res) => {
	const { title, description } = req.body;

	toDoModel.create({ title, description }).then((data) => {
		console.log("Added successfully");
		console.log(data);

		res.send(data);
	});
};

module.exports.updateTodo = async (req, res) => {
	const { id, title, description } = req.body;
	toDoModel.findByIdAndUpdate(id, { title, description })
		.then(() => {
			console.log("Updated successfully");
			res.send();
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports.deleteTodo = async (req, res) => {
	const { id } = req.body;
	toDoModel.findByIdAndDelete(id)
		.then(() => {
			console.log("Deleted successfully");
			res.send();
		})
		.catch((err) => {
			console.log(err);
		});
};
