import { useState } from "react";
import "./App.css";
import FilterButton from "./Components/FilterButton";
import Forms from "./Components/Forms";
import Todo from "./Components/Todo";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  // const headingText = `${taskList.length} tasks remaining`;
  console.log(props.tasks);
  // const taskList = props.tasks?.map((aditya) => aditya.name);

  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  function toggleTaskCompleted(id) {
    // console.log(tasks[0]);
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    // console.log(id);
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const myTodo = tasks?.map((aditya) => (
    <Todo
      id={aditya.id}
      name={aditya.name}
      completed={aditya.completed}
      key={aditya.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  function addTask(name) {
    // const newTask = { id: "id", name: name, completed: false };
    // setTasks([...tasks, newTask]);
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <>
      <div className="todoapp stack-large">
        <h1>Persona To Do</h1>
        <Forms addTask={addTask} />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {/* {taskList} */}

          {myTodo}
        </ul>
      </div>
    </>
  );
}

export default App;
