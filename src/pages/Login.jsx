import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin') { // Mock authentication
            onLogin(true);
            navigate('/overview');
        } else {
            setError('Invalid password. Hint: admin');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-background-dark p-6">
            <form onSubmit={handleLogin} className="glass-panel p-10 w-full max-w-md flex flex-col gap-6">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold shadow-glow mb-4">
                        <span className="material-icons-round text-3xl">all_inclusive</span>
                    </div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">OpenClaw</h1>
                    <p className="text-gray-400 mt-2 text-sm font-medium">System Authentication</p>
                </div>

                {error && <div className="text-danger text-sm text-center font-medium bg-danger/10 p-2 rounded-lg border border-danger/20">{error}</div>}

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Master Password</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="material-icons-round text-gray-500 text-sm">lock</span>
                        </span>
                        <input
                            type="password"
                            className="w-full py-3 pl-10 pr-4 text-sm text-gray-200 bg-surface-darker border border-border-dark rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-600 transition-all font-mono"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button type="submit" className="mt-2 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:scale-[1.02] active:scale-[0.98]">
                    <span className="material-icons-round text-sm">login</span>
                    Secure Login
                </button>
            </form>
        </div>
    );
};

export default Login;
