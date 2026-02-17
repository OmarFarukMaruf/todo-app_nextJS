"use client";

import { useState } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative mb-6">
            <input
                type="text"
                placeholder="Add a new task..."
                className="w-full p-4 pl-5 pr-14 rounded-xl bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                disabled={!text.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Add Task"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
            </button>
        </form>
    );
}
