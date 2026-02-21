import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Topbar from './Topbar';
import BottomNav from './BottomNav';
import Sidebar from './Sidebar';

const Layout = ({ isAuthenticated }) => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-gray-100 font-sans antialiased selection:bg-primary selection:text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <Topbar />
                <main className="flex-1 overflow-y-auto pt-4 pb-24 md:pb-8 px-4 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
                <BottomNav />
            </div>
        </div>
    );
};

export default Layout;
