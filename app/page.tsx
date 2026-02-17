"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import StatusCards from "./components/StatusCards";
import Footer from "./components/Footer";

interface Task {
  id: string;
  task: string;
  isDone: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: uuidv4(), task: "Buy groceries", isDone: false },
    { id: uuidv4(), task: "Clean the house", isDone: true },
  ]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: uuidv4(),
      task: text,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string, newText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, task: newText } : task
      )
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 font-sans selection:bg-violet-500/30">
      <div className="max-w-2xl mx-auto">
        <Header />

        <StatusCards total={tasks.length} completed={tasks.filter((t) => t.isDone).length} />

        <div className="bg-slate-900/50 backdrop-blur-sm shadow-xl ring-1 ring-slate-800/60 rounded-2xl p-6 sm:p-8">
          <TodoInput onAdd={addTask} />
          <TodoList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
            onClearAll={clearAllTasks}
          />
        </div>

        <Footer />
      </div>
    </main>
  );
}
