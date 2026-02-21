import React from 'react';

const Topbar = () => {
    return (
        <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-border-dark bg-surface-dark/90 backdrop-blur-md z-40 shrink-0">
            <div className="flex items-center gap-3">
                {/* Mobile menu toggle (optional if handled by bottom nav) */}
                <button className="md:hidden p-1 rounded-md text-gray-400 hover:bg-gray-800 transition-colors">
                    <span className="material-icons-round">menu</span>
                </button>
                <div className="flex items-center gap-1 md:hidden">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">OpenClaw</span>
                </div>

                {/* Desktop Search */}
                <div className="hidden md:block relative w-full max-w-md ml-4">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-icons-round text-sm text-gray-500">search</span>
                    </span>
                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 text-sm text-gray-300 bg-bg-card border border-border-dark rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 transition-all"
                        placeholder="Search workers, jobs..."
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                    <span className="text-xs font-medium text-success">System Live</span>
                </div>

                <button className="relative p-2 rounded-full text-gray-400 hover:bg-gray-800 transition-colors">
                    <span className="material-icons-round text-xl">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-surface-dark"></span>
                </button>

                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 p-[2px] cursor-pointer ml-2">
                    <div className="rounded-full w-full h-full bg-surface-dark flex items-center justify-center">
                        <span className="material-icons-round text-xs text-white">person</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
