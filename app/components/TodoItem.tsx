"use client";

import { useState, useRef, useEffect } from "react";

interface Task {
    id: string;
    task: string;
    isDone: boolean;
}

interface TodoItemProps {
    todo: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.task);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleSave = () => {
        if (editText.trim()) {
            onEdit(todo.id, editText.trim());
            setIsEditing(false);
        } else {
            // If empty, revert or delete? Let's revert
            setEditText(todo.task);
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") {
            setEditText(todo.task);
            setIsEditing(false);
        }
    };

    return (
        <div
            className={`group flex items-center gap-3 p-4 rounded-xl border border-slate-800 transition-all ${todo.isDone ? "bg-slate-900/50 border-transparent" : "bg-slate-800 shadow-sm hover:border-slate-700"
                }`}
        >
            <button
                onClick={() => onToggle(todo.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${todo.isDone
                        ? "bg-violet-500 border-violet-500 text-white"
                        : "border-slate-500 text-transparent hover:border-violet-400"
                    }`}
                aria-label={todo.isDone ? "Mark as incomplete" : "Mark as complete"}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </button>

            <div className="flex-grow min-w-0">
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none border-b border-violet-500 px-0 py-0"
                    />
                ) : (
                    <span
                        className={`block truncate cursor-pointer select-none transition-all ${todo.isDone ? "text-slate-500 line-through decoration-slate-600" : "text-slate-200"
                            }`}
                        onClick={() => setIsEditing(true)}
                        title="Click to edit"
                    >
                        {todo.task}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="p-2 text-slate-400 hover:text-violet-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                    aria-label="Edit"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                </button>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
                    aria-label="Delete"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
