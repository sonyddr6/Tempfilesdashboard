import React from 'react';

const Settings = () => {
    return (
        <div className="flex-col gap-6">
            <h1 className="text-gradient">Settings</h1>

            <div className="glass-panel" style={{ padding: '24px', maxWidth: '600px' }}>
                <h3 style={{ marginBottom: '24px', fontWeight: 500 }}>Global Configuration</h3>

                <div className="flex-col gap-6">
                    <div className="flex-col gap-2">
                        <label className="text-sm" style={{ color: 'var(--text-secondary)' }}>API Port</label>
                        <input type="text" className="search-input glass-panel interactive" defaultValue="8000" style={{ padding: '12px 16px' }} />
                    </div>

                    <div className="flex-col gap-2">
                        <label className="text-sm" style={{ color: 'var(--text-secondary)' }}>LLM Model Binding</label>
                        <select className="search-input glass-panel interactive" style={{ padding: '12px 16px', color: 'var(--text-primary)' }}>
                            <option>Gemini 2.5 Flash</option>
                            <option>Gemini 1.5 Pro</option>
                        </select>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <button className="btn-primary" style={{ width: 'fit-content' }}>Save Deployment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
