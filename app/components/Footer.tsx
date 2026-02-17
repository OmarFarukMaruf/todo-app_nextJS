export default function Footer() {
    return (
        <footer className="mt-12 border-t border-slate-800/50 pt-8 text-center">
            <div className="max-w-md mx-auto">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                    Daily Routine for Success
                </h3>
                <div className="space-y-2 text-sm text-slate-500 italic font-medium">
                    <p>"Plan your day the night before."</p>
                    <p>"Tackle the hardest task first."</p>
                    <p>"Take focused breaks to recharge."</p>
                    <p>"Reflect on your progress daily."</p>
                </div>
                <div className="mt-8 text-xs text-slate-600">
                    <p>&copy; {new Date().getFullYear()} Todo Master. Crafted for productivity.</p>
                </div>
            </div>
        </footer>
    );
}
