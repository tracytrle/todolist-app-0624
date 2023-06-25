import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 0 },
  ]);

  const [showInComplete, setShowInComplete] = useState(false);

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      // copy old tasks, then add the newTask
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    tasks.filter((task) => task.id !== taskId);
  };

  return (
    <div className="container">
      <Header />
      <TaskList
        tasks={tasks}
        showInComplete={showInComplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowInComplete={setShowInComplete}
      />
      <AddTaskForm
        newTask={newTask}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
