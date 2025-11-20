import React from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '../themes/types';

interface UniverseCardProps {
    theme: Theme;
    onClick: (theme: Theme) => void;
}

export const UniverseCard: React.FC<UniverseCardProps> = ({ theme, onClick }) => {
    return (
        <motion.div
            className="universe-card"
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(theme)}
            style={{
                background: `linear-gradient(135deg, ${theme.colors.background} 0%, #000000 100%)`,
                border: `2px solid ${theme.colors.primary}`,
                borderRadius: '16px',
                padding: '2rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `0 10px 30px -10px ${theme.colors.primary}40`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px',
                minWidth: '250px',
            }}
        >
            {/* Background Glow Effect */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at center, ${theme.colors.primary}20 0%, transparent 70%)`,
                    zIndex: 0,
                }}
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Content */}
            <div style={{ zIndex: 1, textAlign: 'center' }}>
                <motion.h2
                    style={{
                        color: theme.colors.primary,
                        fontFamily: theme.fonts.primary,
                        fontSize: '2.5rem',
                        margin: 0,
                        textShadow: `0 0 20px ${theme.colors.primary}80`,
                    }}
                >
                    {theme.name.replace('_', ' ').toUpperCase()}
                </motion.h2>

                <p style={{ color: theme.colors.text, opacity: 0.8, marginTop: '1rem' }}>
                    Click to Enter
                </p>
            </div>
        </motion.div>
    );
};
