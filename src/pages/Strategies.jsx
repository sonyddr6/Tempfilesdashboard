import React from 'react';

const Strategies = () => {
    return (
        <div className="flex-col gap-6" style={{ height: '100%', paddingBottom: '20px' }}>
            <div>
                <h1 className="text-gradient">Strategies (AGENTS.md)</h1>
                <p className="text-muted" style={{ marginTop: '8px' }}>Editor visual de políticas em tempo real (RAG).</p>
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '0', display: 'flex' }}>
                <textarea
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        padding: '24px',
                        color: 'var(--text-primary)',
                        fontFamily: 'monospace',
                        resize: 'none',
                        outline: 'none',
                        lineHeight: '1.6'
                    }}
                    defaultValue={`# OpenClaw Agents Configuration

## Default Policy
- Maintain high availability.
- Throttle background requests to 5 req/sec.`}
                />
            </div>
        </div>
    );
};

export default Strategies;
