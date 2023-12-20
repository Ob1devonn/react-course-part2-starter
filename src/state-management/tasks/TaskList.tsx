import { useContext } from "react";
import useAuth from "../auth/useAuth";
import TasksContext from "./taskContext";

export const useTasks = () => useContext(TasksContext);

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={
          () =>
            dispatch({
              type: "ADD",
              task: { id: Date.now(), title: "Task" + Date.now() },
            }) // replaced setTasks([{ id: Date.now(), title: "Task " + Date.now() }, ...tasks])
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })} //replaces setTasks(tasks.filter((t) => t.id !== task.id))
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
