import React from 'react';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            fontFamily: "'Segoe UI', sans-serif",
            color: '#f1f5f9',
            textAlign: 'center',
            padding: '2rem',
        }}>
            <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1.5rem',
                padding: '3rem 4rem',
                backdropFilter: 'blur(10px)',
                maxWidth: '520px',
                width: '100%',
            }}>
                <div style={{ fontSize: '6rem', fontWeight: '900', color: '#3b82f6', lineHeight: 1 }}>
                    404
                </div>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', margin: '1rem 0 0.5rem' }}>
                    Page Not Found
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', margin: '0 0 2rem' }}>
                    This page is temporarily unavailable.<br />
                    We'll be back shortly. Thank you for your patience.
                </p>
                <a
                    href="mailto:info@chemicoindustries.com"
                    style={{
                        display: 'inline-block',
                        background: '#3b82f6',
                        color: '#fff',
                        padding: '0.65rem 1.75rem',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'background 0.2s',
                    }}
                    onMouseOver={e => e.target.style.background = '#2563eb'}
                    onMouseOut={e => e.target.style.background = '#3b82f6'}
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}
