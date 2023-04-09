import React from "react";
import { Task } from "./Task";

export const TaskList: React.FC<{
  tasks: { id: number; content: string }[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, content: string) => void;
}> = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};
