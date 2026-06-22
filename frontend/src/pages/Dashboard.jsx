import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [editId, setEditId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Low",
    due_date: "",
    user_id: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user_data");

    if (!token) {
      navigate("/login");
      return;
    }

    const user_data = userData ? JSON.parse(userData) : null;

    if (user_data) {
      console.log(user_data.id);
      setUser(user_data);
      setUserId(user_data.id);
      setTask((prev) => ({
        ...prev,
        user_id: user_data.id,
      }));
      getTasks(user_data.id);
    }
    console.log(user_data.id);
    getTasks(user_data.id);
  }, []);

  // const user_Id = user_data.id;

  const getTasks = async (id) => {
    try {
      if (!id) {
        console.log("User ID not found");
        return;
      }

      const response = await API.get(`/tasks/${id}`);

      console.log("Tasks:", response.data);

      setTasks(response.data);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await API.delete(`/tasks/${id}`);

      alert("Task deleted successfully");

      getTasks(userId);
    } catch (error) {
      console.log("Delete Task Error:", error);
    }
  };

  const updateTask = async () => {
    try {
      const taskData = {
        ...task,
        user_id: userId,
      };

      console.log("Updating Task:", taskData);

      await API.put(`/tasks/${editId}`, taskData);

      alert("Task updated successfully");

      setEditId(null);

      setTask({
        title: "",
        description: "",
        status: "Pending",
        priority: "Low",
        due_date: "",
        user_id: userId,
      });

      getTasks(userId);
    } catch (error) {
      console.log("Update Task Error:", error);
    }
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const addTask = async (e) => {
    e.preventDefault();

    try {
      const taskData = {
        ...task,
        user_id: userId,
      };

      console.log("Sending Task:", taskData);

      await API.post("/tasks/create", taskData);

      alert("Task added successfully");

      getTasks(userId);

      setTask({
        title: "",
        description: "",
        status: "Pending",
        priority: "Low",
        due_date: "",
        user_id: userId,
      });
    } catch (error) {
      console.log("Add Task Error:", error);
    }
  };

  return (
    <div>
      <Navbar user={user} />
      <h1>Task Dashboard</h1>

      <h2>Add Task</h2>

      <form
        onSubmit={
          editId
            ? (e) => {
                e.preventDefault();
                updateTask();
              }
            : addTask
        }
      >
        <input
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
        />

        <br />

        <input
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />

        <br />

        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>

          <option value="In Progress">In Progress</option>

          <option value="Completed">Completed</option>
        </select>

        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>

          <option value="Medium">Medium</option>

          <option value="High">High</option>
        </select>

        <br />

        <input
          name="due_date"
          type="date"
          value={task.due_date}
          onChange={handleChange}
        />

        <br />

        <button>{editId ? "Update Task" : "Add Task"}</button>
      </form>

      <h2>Your Tasks</h2>

      {loading ? (
        <h3 className="no-tasks">Loading tasks...</h3>
      ) : tasks.length === 0 ? (
        <h3 className="no-tasks">No tasks available. Add your first task!</h3>
      ) : (
        <div className="tasks-container">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <div className="badges">
                <span className="status">{task.status}</span>

                <span className="priority">{task.priority}</span>
              </div>

              <div className="task-actions">
                <button
                  onClick={() => {
                    console.log(task);

                    setEditId(task.id);

                    setTask({
                      title: task.title,
                      description: task.description,
                      status: task.status,
                      priority: task.priority,
                      due_date: task.due_date.split("T")[0], // converts to YYYY-MM-DD
                      user_id: userId,
                    });
                  }}
                >
                  Edit
                </button>

                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
