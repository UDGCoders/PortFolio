import React, { Component } from 'react';
import Spline from '@splinetool/react-spline';

export default function Background3D() {
    return (
        <div className="canvas-container animate-fade-in" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h3 style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>3D Model Placeholder</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '400px', lineHeight: '1.5' }}>
                    We need the "Export" code from your Spline file to render it here without crashing the app.
                    <br /><br />
                    Check the chat for instructions on how to get the <b>.splinecode</b> URL!
                </p>
            </div>
        </div>
    );
}
