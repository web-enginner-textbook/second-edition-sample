import React, { useEffect, useState } from "react";
import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";

// ⑥Task型
interface Task {
  id: number;
  content: string;
}

const END_POINT = "http://localhost:3002/todo_tasks";

const App = () => {
  // ⑤ステートの型としてTask型の配列を指定
  const [tasks, setTasks] = useState<Task[]>([]);

  // ⑨初期データの取得
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(END_POINT, {
        method: "GET",
      });

      const { todo_tasks } = await res.json();
      setTasks(todo_tasks);
    };

    fetchTasks();
  }, []);

  // ⑦APIに保存リクエストを投げ、完了後にステートを更新
  const onSave = async (content: string) => {
    const res = await fetch(END_POINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    const { todo_task } = await res.json();
    const newTasks = tasks.concat([todo_task]);
    setTasks(newTasks);
  };

  const onDelete = async (id: number) => {
    await fetch(`${END_POINT}/${id}`, {
      method: "DELETE",
    });
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const onUpdate = async (id: number, content: string) => {
    const res = await fetch(`${END_POINT}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const { todo_task } = await res.json();

    const newTasks = tasks.map((task) =>
      task.id === id ? { id: todo_task.id, content: todo_task.content } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className={"app_wrapper"}>
      <h3>{"タスクを追加"}</h3>
      {/* ⑦保存処理を設定 */}
      <TaskForm onSave={onSave} />
      <h3>{`残タスク数: ${tasks.length}`}</h3>
      {/* ④タスク一覧の情報と、削除処理、編集処理を設定 */}
      <TaskList tasks={tasks} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
};

export default App;
