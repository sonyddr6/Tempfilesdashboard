import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const Overview = () => {
    // Chart Data Setup
    const data = {
        labels: ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50'],
        datasets: [{
            label: 'Active Lanes',
            data: [12, 19, 15, 25, 22, 30],
            borderColor: '#00E5FF',
            backgroundColor: 'rgba(0, 229, 255, 0.15)', // Fallback opacity fill
            borderWidth: 2,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#161822',
            pointBorderColor: '#00E5FF',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#161822',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#2D303E',
                borderWidth: 1,
                displayColors: false,
                padding: 10
            }
        },
        scales: {
            x: {
                grid: { display: false, drawBorder: false },
                ticks: { color: '#6B7280', font: { size: 10 } }
            },
            y: {
                grid: { color: 'rgba(45, 48, 62, 0.5)', drawBorder: false, borderDash: [5, 5] },
                ticks: { color: '#6B7280', font: { size: 10 } },
                suggestedMin: 0
            }
        },
        interaction: { intersect: false, mode: 'index' },
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-surface-darker rounded-xl p-3 border border-border-dark shadow-sm">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-300">System Live</span>
                </div>
                <span className="text-xs text-gray-400 font-mono">v2.4.0-stable</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark shadow-sm relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-primary">smart_toy</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-sm font-medium text-gray-400 mb-1">Active Agents</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white">142</span>
                            <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full flex items-center">
                                <span className="material-icons-round text-[10px] mr-1">arrow_upward</span> 12%
                            </span>
                        </div>
                        <div className="mt-3 flex gap-2">
                            <div className="h-1.5 flex-1 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-3/4 rounded-full"></div>
                            </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-400 flex justify-between">
                            <span>Main: 12</span>
                            <span>Sub: 130</span>
                        </div>
                    </div>
                </div>

                <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark shadow-sm relative overflow-hidden">
                    <div className="absolute right-0 top-0 p-4 opacity-10">
                        <span className="material-icons-round text-6xl text-secondary">memory</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-sm font-medium text-gray-400 mb-1">CPU Load</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white">68%</span>
                            <span className="text-xs font-medium text-warning bg-warning/10 px-2 py-0.5 rounded-full">High Load</span>
                        </div>
                        <div className="mt-4 h-8 w-full flex items-end gap-1 opacity-80">
                            {[40, 60, 45, 70, 85, 65, 50, 30, 55, 75, 68].map((h, i) => (
                                <div key={i} className={`w-1 bg-secondary rounded-t-sm`} style={{ height: `${h}%`, opacity: 0.3 + (h / 100) }}></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-surface-dark rounded-2xl p-4 border border-border-dark shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="material-icons-round text-primary text-xl">storage</span>
                        <span className="text-xs text-gray-400">RAM</span>
                    </div>
                    <div className="text-2xl font-bold text-white">12.4 <span className="text-sm font-normal text-gray-500">GB</span></div>
                    <div className="text-xs text-gray-400 mt-1">of 32 GB Total</div>
                    <div className="mt-2 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-primary w-[38%] rounded-full"></div>
                    </div>
                </div>

                <div className="bg-surface-dark rounded-2xl p-4 border border-border-dark shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="material-icons-round text-success text-xl">speed</span>
                        <span className="text-xs text-gray-400">Ping</span>
                    </div>
                    <div className="text-2xl font-bold text-white">42 <span className="text-sm font-normal text-gray-500">ms</span></div>
                    <div className="text-xs text-success mt-1">Optimal</div>
                    <div className="mt-2 flex gap-0.5 h-1">
                        <div className="bg-success w-1/5 rounded-l-full h-full opacity-100"></div>
                        <div className="bg-success w-1/5 h-full opacity-80"></div>
                        <div className="bg-success w-1/5 h-full opacity-60"></div>
                        <div className="bg-gray-700 w-1/5 h-full opacity-40"></div>
                        <div className="bg-gray-700 w-1/5 rounded-r-full h-full opacity-20"></div>
                    </div>
                </div>
            </div>

            <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-white">Lane Concurrency</h3>
                    <select className="bg-transparent text-xs text-primary border-none focus:ring-0 cursor-pointer font-medium p-0 pr-4 outline-none">
                        <option>Last Hour</option>
                        <option>24 Hours</option>
                        <option>7 Days</option>
                    </select>
                </div>
                <div className="relative h-40 w-full">
                    <Line data={data} options={options} />
                </div>
            </div>

            <div className="bg-surface-dark rounded-2xl border border-border-dark shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border-dark flex justify-between items-center bg-surface-darker">
                    <h3 className="text-base font-semibold text-white">Live Logs</h3>
                    <button className="text-xs text-primary hover:text-primary-dark transition-colors">View All</button>
                </div>
                <div className="p-4 bg-[#0F111A] font-mono text-xs overflow-x-auto">
                    <div className="flex flex-col gap-2">
                        <div className="whitespace-nowrap">
                            <span className="text-gray-500">[14:32:15] </span>
                            <span className="text-primary font-bold">INFO: </span>
                            <span className="text-gray-300">Processing data chunk 45/120.</span>
                        </div>
                        <div className="whitespace-nowrap">
                            <span className="text-gray-500">[14:32:18] </span>
                            <span className="text-primary font-bold">INFO: </span>
                            <span className="text-gray-300">API request success (200 OK).</span>
                        </div>
                        <div className="whitespace-nowrap">
                            <span className="text-gray-500">[14:32:21] </span>
                            <span className="text-warning font-bold">WARN: </span>
                            <span className="text-warning">Latency spike detected in stream.</span>
                        </div>
                        <div className="whitespace-nowrap">
                            <span className="text-gray-500">[14:32:23] </span>
                            <span className="text-primary font-bold">INFO: </span>
                            <span className="text-gray-300">Completed task ID: <span className="text-primary underline cursor-pointer">task-9821</span>.</span>
                        </div>
                        <div className="whitespace-nowrap opacity-50">
                            <span className="text-gray-500">[14:32:30] </span>
                            <span className="text-error font-bold">ERROR: </span>
                            <span className="text-error">DB connection timeout. Retrying...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
