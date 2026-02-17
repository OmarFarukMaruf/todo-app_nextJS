export default function StatusCards({ total, completed }: { total: number; completed: number }) {
    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="relative overflow-hidden rounded-2xl p-6 bg-slate-800/40 backdrop-blur-md border border-white/10 shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Total Tasks</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-100">{total}</span>
                        <span className="text-xs text-slate-500">tasks</span>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6 bg-slate-800/40 backdrop-blur-md border border-white/10 shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Completed</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-100">{completed}</span>
                        <span className="text-xs text-slate-500">done</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
