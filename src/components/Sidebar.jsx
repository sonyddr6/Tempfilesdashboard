import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-64 flex-shrink-0 flex-col border-r border-border-dark bg-bg-sidebar hidden md:flex z-50 relative">
            <div className="h-16 flex items-center px-6 mt-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold shadow-glow mr-3">
                    <span className="material-icons-round text-lg">all_inclusive</span>
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-2xl font-bold text-primary tracking-tight">OpenClaw</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest mt-1">DASHBOARD</span>
                </div>
            </div>

            <nav className="flex-1 px-4 py-8 space-y-2">
                <NavLink to="/" className={({ isActive }) => `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group ${isActive ? 'text-primary bg-primary/10 border-l-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-surface-dark'}`}>
                    <span className={`material-icons-round w-5 h-5 mr-3 ${/* eslint-disable-next-line react/prop-types */''}` + ' group-hover:text-white transition-colors'}>dashboard</span>
                    Overview
                </NavLink>
                <NavLink to="/sub-agents" className={({ isActive }) => `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group ${isActive ? 'text-primary bg-primary/10 border-l-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-surface-dark'}`}>
                    <span className="material-icons-round w-5 h-5 mr-3 group-hover:text-white transition-colors">smart_toy</span>
                    Agents Menu
                </NavLink>
                <NavLink to="/logs" className={({ isActive }) => `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group ${isActive ? 'text-primary bg-primary/10 border-l-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-surface-dark'}`}>
                    <span className="material-icons-round w-5 h-5 mr-3 group-hover:text-white transition-colors">terminal</span>
                    Logs & History
                </NavLink>
                <NavLink to="/strategies" className={({ isActive }) => `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group ${isActive ? 'text-primary bg-primary/10 border-l-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-surface-dark'}`}>
                    <span className="material-icons-round w-5 h-5 mr-3 group-hover:text-white transition-colors">extension</span>
                    Strategies
                </NavLink>
            </nav>

            <div className="px-4 py-6 border-t border-border-dark">
                <NavLink to="/settings" className="flex items-center px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <span className="material-icons-round w-5 h-5 mr-3">settings</span>
                    Settings
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
