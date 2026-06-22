const db = require("../config/db");


// Create Task
exports.createTask = (req, res) => {

    const {
        title,
        description,
        status,
        priority,
        due_date,
        user_id
    } = req.body;


    db.query(
        `INSERT INTO tasks
        (title,description,status,priority,due_date,user_id)
        VALUES (?,?,?,?,?,?)`,
        [
            title,
            description,
            status,
            priority,
            due_date,
            user_id
        ],
        (err, result) => {

            if(err){
                return res.status(500).json(err);
            }

            res.status(201).json({
                message:"Task created successfully"
            });

        }
    );

};

// Get All Tasks
// Get All Tasks
exports.getTasks = (req, res) => {
    const { id } = req.params;

    db.query(
        "SELECT * FROM tasks WHERE user_id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );
};

// Update Task
exports.updateTask = (req, res) => {

    const { id } = req.params;

    const {
        title,
        description,
        status,
        priority,
        due_date
    } = req.body;

    db.query(
        `UPDATE tasks
         SET title=?, description=?, status=?, priority=?, due_date=?
         WHERE id=?`,
        [
            title,
            description,
            status,
            priority,
            due_date,
            id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Task updated successfully"
            });

        }
    );

};

// Delete Task
exports.deleteTask = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM tasks WHERE id=?",
        [id],
        (err, result) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message:"Task deleted successfully"
            });

        }
    );

};