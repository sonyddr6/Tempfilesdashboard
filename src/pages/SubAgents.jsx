import React, { useState } from 'react';

const AgentCard = ({ id, type, name, lane, model, status, statusColor, pulse, bgIcon, iconColor, bgRing }) => {
    return (
        <div className="card-container relative h-24 w-full group">
            {/* Background Action Buttons */}
            <div className="action-bg bg-gray-800 pr-4 gap-2">
                <button className="flex flex-col items-center justify-center w-16 h-full text-gray-300 hover:text-primary transition-colors">
                    <span className="material-icons-round mb-1">terminal</span>
                    <span className="text-[10px] font-medium">Logs</span>
                </button>
                <button className="flex flex-col items-center justify-center w-16 h-full text-gray-300 hover:text-danger transition-colors">
                    <span className="material-icons-round mb-1">stop_circle</span>
                    <span className="text-[10px] font-medium">Stop</span>
                </button>
            </div>

            {/* Foreground Swipe Card */}
            <div className="swipe-card h-full w-full bg-card-dark rounded-xl p-4 shadow-sm border border-border-dark flex items-center justify-between cursor-pointer hover:border-border-light/20 transition-colors">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${bgRing}`}>
                        <span className={`material-icons-round ${iconColor}`}>{bgIcon}</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-mono font-bold text-white">{id}</h3>
                            {type === 'MAIN' && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-white shadow-sm shadow-primary/30">MAIN</span>}
                            {type === 'SUB' && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/20">SUB</span>}
                            {type === 'CRON' && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/20">CRON</span>}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center gap-1.5">
                            <span className="material-icons-round text-[12px]">memory</span>
                            <span>{name} • {model}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border`} style={{ backgroundColor: `var(--color-${statusColor}-10)`, borderColor: `var(--color-${statusColor}-20)`, color: statusColor === 'success' ? '#10b981' : (statusColor === 'warning' ? '#f59e0b' : '#ef4444') }}>
                        {pulse && <span className={`w-1.5 h-1.5 rounded-full ${statusColor === 'success' ? 'bg-success' : 'bg-warning'} animate-pulse`}></span>}
                        {!pulse && statusColor === 'danger' && <span className="material-icons-round text-sm">error</span>}
                        {status}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">{lane}</span>
                </div>
            </div>
        </div>
    );
};

const SubAgents = () => {
    return (
        <div className="min-h-full">
            <div className="flex items-end justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white">Active Agents</h1>
                    <p className="text-sm text-gray-400">Manage your fleet status</p>
                </div>
                <button className="p-2 rounded-lg bg-card-dark border border-border-dark text-gray-400 hover:text-primary transition-colors shadow-sm">
                    <span className="material-icons-round">filter_list</span>
                </button>
            </div>

            <div className="space-y-4">
                <AgentCard
                    id="MA-001" type="MAIN" name="Central DB" model="GPT-4 Turbo" lane="Lane-A"
                    status="Running" statusColor="success" pulse={true}
                    bgIcon="smart_toy" iconColor="text-primary" bgRing="bg-primary/10 border border-primary/20"
                />
                <AgentCard
                    id="SA-005" type="SUB" name="Data Processor" model="Claude 3" lane="Lane-A"
                    status="Running" statusColor="success" pulse={true}
                    bgIcon="extension" iconColor="text-indigo-500" bgRing="bg-indigo-500/10 border border-indigo-500/20"
                />
                <AgentCard
                    id="CR-022" type="CRON" name="Daily Backup" model="Llama 3" lane="Lane-B"
                    status="High Latency" statusColor="warning" pulse={false}
                    bgIcon="schedule" iconColor="text-orange-500" bgRing="bg-orange-500/10 border border-orange-500/20"
                />
                <AgentCard
                    id="SA-008" type="SUB" name="Image Gen" model="DALL-E 3" lane="Lane-C"
                    status="Stopped" statusColor="danger" pulse={false}
                    bgIcon="image_search" iconColor="text-gray-500" bgRing="bg-gray-500/10 border border-gray-500/20 grayscale"
                />
            </div>
        </div>
    );
};

export default SubAgents;
