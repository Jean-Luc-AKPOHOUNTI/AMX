import React from 'react';

export const Home: React.FC = () => {
    return (
        <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
            {/* Background Image with Overlay */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/assets/fond_amx.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    // background: 'rgba(0, 0, 0, 0.4)', // Dark overlay for readability
                    zIndex: -1
                }}
            />

        </div>
    );
};
