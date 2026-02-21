import React, { useState } from 'react';

const Logs = () => {
    const [activeTab, setActiveTab] = useState('logs');

    return (
        <div className="flex flex-col h-full animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold inline-block text-gradient">Agent Detail & Control</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-[600px] lg:h-[calc(100vh-180px)]">
                {/* Left Column (Details & Config) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Agent Details Card */}
                    <section className="bg-surface-dark border border-border-dark rounded-xl p-5 shadow-lg flex-1 flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-gray-100">Agent Details: SA-005</h2>
                            <p className="text-sm text-gray-400 mt-1">Status & Info</p>
                        </div>
                        <div className="space-y-3 text-sm flex-1">
                            <div className="grid grid-cols-3 py-1 border-b border-border-dark/50 pb-2">
                                <span className="text-gray-500">ID:</span>
                                <span className="col-span-2 text-gray-300 font-mono">SA-005</span>
                            </div>
                            <div className="grid grid-cols-3 py-1 border-b border-border-dark/50 pb-2">
                                <span className="text-gray-500">Type:</span>
                                <span className="col-span-2 text-gray-300">Sub-Agent (Data Processor)</span>
                            </div>
                            <div className="grid grid-cols-3 py-1 border-b border-border-dark/50 pb-2">
                                <span className="text-gray-500">Status:</span>
                                <span className="col-span-2 text-success font-medium">Running (Active)</span>
                            </div>
                            <div className="grid grid-cols-3 py-1 border-b border-border-dark/50 pb-2">
                                <span className="text-gray-500">Uptime:</span>
                                <span className="col-span-2 text-gray-300">14h 32m</span>
                            </div>
                            <div className="grid grid-cols-3 py-1 border-b border-border-dark/50 pb-2">
                                <span className="text-gray-500">Lane:</span>
                                <span className="col-span-2 text-gray-300">Lane-A</span>
                            </div>
                            <div className="grid grid-cols-3 py-1">
                                <span className="text-gray-500">Resources:</span>
                                <span className="col-span-2 text-gray-300">2 vCPU, 4GB RAM</span>
                            </div>
                        </div>
                    </section>

                    {/* Configuration Card */}
                    <section className="bg-surface-dark border border-border-dark rounded-xl p-5 shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-100 mb-4">Configuration</h2>
                        <div className="mb-6 relative">
                            <label className="block text-sm text-gray-400 mb-2">Model Selection</label>
                            <select className="w-full bg-[#0B0C15] border border-primary text-gray-200 text-sm rounded-md px-3 py-2 outline-none appearance-none cursor-pointer">
                                <option>GPT-4 Turbo</option>
                                <option>Claude 3 Opus</option>
                                <option>Llama 3 70B</option>
                                <option>Gemini 1.5 Pro</option>
                            </select>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-100 mb-3">Actions</h3>
                            <div className="flex flex-wrap gap-3">
                                <button className="bg-primary hover:bg-primary-dark text-black font-bold py-2 px-4 rounded text-sm transition-colors shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                                    Restart Agent
                                </button>
                                <button className="bg-transparent border border-danger text-danger hover:bg-danger/10 font-medium py-2 px-4 rounded text-sm transition-colors">
                                    Terminate
                                </button>
                                <button className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium py-2 px-4 rounded text-sm transition-colors">
                                    Relocate Lane
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column (Logs & Tabs) */}
                <div className="lg:col-span-8 flex flex-col h-full bg-surface-dark border border-border-dark rounded-xl shadow-lg overflow-hidden relative mt-8 lg:mt-0">
                    {/* Tab Navigation */}
                    <div className="flex items-center justify-between border-b border-border-dark px-4 pt-2 overflow-x-auto">
                        <div className="flex space-x-6 min-w-max">
                            <button
                                onClick={() => setActiveTab('logs')}
                                className={`pb-3 border-b-2 font-medium text-sm transition-colors ${activeTab === 'logs' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                            >Live Logs</button>
                            <button
                                onClick={() => setActiveTab('queue')}
                                className={`pb-3 border-b-2 font-medium text-sm transition-colors ${activeTab === 'queue' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                            >Task Queue</button>
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`pb-3 border-b-2 font-medium text-sm transition-colors ${activeTab === 'settings' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                            >Behavior Settings</button>
                        </div>
                        <button className="text-secondary hover:text-white transition-colors pb-2 shrink-0 ml-4">
                            <span className="material-icons-round text-lg">settings</span>
                        </button>
                    </div>

                    {/* Log Console Container */}
                    <div className="flex-1 p-4 bg-black/40 relative overflow-hidden flex flex-col">
                        <div className="flex-1 bg-[#0A0A0A] rounded-lg p-4 text-xs md:text-sm overflow-y-auto border border-white/5 shadow-inner leading-relaxed font-mono">
                            {activeTab === 'logs' && (
                                <div className="space-y-1">
                                    <div className="whitespace-nowrap">
                                        <span className="text-gray-500">[2024-05-22 14:32:15]</span> <span className="text-primary font-bold">INFO:</span> <span className="text-gray-300">Processing data chunk 45/120.</span>
                                    </div>
                                    <div className="whitespace-nowrap">
                                        <span className="text-gray-500">[2024-05-22 14:32:18]</span> <span className="text-primary font-bold">INFO:</span> <span className="text-gray-300">API request to external service successful.</span>
                                    </div>
                                    <div className="whitespace-nowrap">
                                        <span className="text-gray-500">[2024-05-22 14:32:19]</span> <span className="text-primary font-bold">INFO:</span> <span className="text-gray-300">Processing data chunk 46/120.</span>
                                    </div>
                                    <div className="whitespace-nowrap">
                                        <span className="text-gray-500">[2024-05-22 14:32:21]</span> <span className="text-warning font-bold">WARN:</span> <span className="text-gray-300">Latency spike detected in data stream.</span>
                                    </div>
                                    <div className="whitespace-nowrap">
                                        <span className="text-gray-500">[2024-05-22 14:32:23]</span> <span className="text-primary font-bold">INFO:</span> <span className="text-gray-300">Completed task ID: <span className="text-blue-400 cursor-pointer hover:underline">task-9821</span>. Starting next task.</span>
                                    </div>
                                    <div className="whitespace-nowrap mt-2">
                                        <span className="text-gray-500">[2024-05-22 14:32:30]</span> <span className="text-danger font-bold">ERROR:</span> <span className="text-danger opacity-90">Failed to connect to database replica. Retrying...</span>
                                    </div>
                                    <div className="whitespace-nowrap animate-pulse mt-2">
                                        <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> <span className="text-primary font-bold">...</span>
                                    </div>
                                </div>
                            )}
                            {activeTab !== 'logs' && (
                                <div className="text-gray-500 italic flex items-center justify-center h-full">
                                    {activeTab === 'queue' ? 'No tasks pending in the current queue.' : 'Behavior settings are synced.'}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logs;
