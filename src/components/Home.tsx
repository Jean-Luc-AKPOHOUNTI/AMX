import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { UniverseCard } from './UniverseCard';
import { dragonBallTheme } from '../themes/dragonBall';

export const Home: React.FC = () => {
    const { setTheme } = useTheme();

    // Liste des univers disponibles (pour l'instant juste DBZ)
    const universes = [dragonBallTheme];

    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ marginBottom: '4rem', textAlign: 'center' }}
            >
                <motion.h1
                    style={{
                        fontSize: '5rem',
                        fontWeight: '900',
                        background: 'linear-gradient(to right, #fff, #aaa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        margin: '0 0 1rem 0',
                        letterSpacing: '-2px',
                    }}
                >
                    AMX
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: '1.5rem', color: '#888' }}
                >
                    Select Your Universe
                </motion.p>
            </motion.div>

            {/* Grid Section */}
            <motion.div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    justifyItems: 'center',
                }}
            >
                {universes.map((theme, index) => (
                    <motion.div
                        key={theme.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                    >
                        <UniverseCard theme={theme} onClick={setTheme} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
