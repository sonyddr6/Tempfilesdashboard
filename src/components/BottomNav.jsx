import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
    return (
        <>
            {/* Floating Action Button (Mobile) */}
            <button className="fixed md:hidden bottom-20 right-6 w-14 h-14 bg-primary hover:bg-cyan-400 text-surface-darker rounded-full shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-40">
                <span className="material-icons-round text-3xl">add</span>
            </button>

            {/* Bottom Navigation */}
            <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-surface-dark/95 backdrop-blur-md border-t border-border-dark pb-safe h-16 flex items-center justify-around z-50">
                <NavLink to="/" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`}>
                    <span className="material-icons-round text-2xl">grid_view</span>
                    <span className="text-[10px] font-medium mt-1">Overview</span>
                </NavLink>
                <NavLink to="/sub-agents" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`}>
                    <span className="material-icons-round text-2xl">smart_toy</span>
                    <span className="text-[10px] font-medium mt-1">Agents</span>
                </NavLink>
                <NavLink to="/logs" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`}>
                    <span className="material-icons-round text-2xl">terminal</span>
                    <span className="text-[10px] font-medium mt-1">Logs</span>
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`}>
                    <span className="material-icons-round text-2xl">settings</span>
                    <span className="text-[10px] font-medium mt-1">Settings</span>
                </NavLink>
            </nav>
        </>
    );
};

export default BottomNav;
