import { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";
import React from "react";

//create a task context interface
interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
