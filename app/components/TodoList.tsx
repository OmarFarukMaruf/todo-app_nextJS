"use client";

import TodoItem from "./TodoItem";

interface Task {
    id: string;
    task: string;
    isDone: boolean;
}

interface TodoListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
    onClearAll: () => void;
}

export default function TodoList({ tasks, onToggle, onDelete, onEdit, onClearAll }: TodoListProps) {
    if (tasks.length === 0) {
        return (
            <div className="text-center py-10 bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
                <p className="text-slate-400">No tasks yet. Add one above!</p>
            </div>
        );
    }

    const completedCount = tasks.filter((t) => t.isDone).length;

    return (
        <div className="space-y-4">
            <div className="space-y-3">
                {tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        todo={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>

            <div className="flex justify-between items-center text-sm text-slate-500 px-2 mt-4 border-t border-slate-800 pt-4">
                <span>
                    {completedCount} of {tasks.length} tasks completed
                </span>
                <button
                    onClick={onClearAll}
                    className="text-red-400 hover:text-red-300 hover:underline transition-all"
                >
                    Clear All
                </button>
            </div>
        </div>
    );
}
