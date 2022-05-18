import "./App.css";
import FilterButton from "./Components/FilterButton";
import Forms from "./Components/Forms";
import Todo from "./Components/Todo";

function App(props) {
  console.log(props.tasks);
  // const taskList = props.tasks?.map((aditya) => aditya.name);

  const myTodo = props.tasks?.map((aditya) => (
    <Todo
      id={aditya.id}
      name={aditya.name}
      completed={aditya.completed}
      key={aditya.id}
    />
  ));

  return (
    <>
      <div className="todoapp stack-large">
        <h1>Persona To Do</h1>
        <Forms />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
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
