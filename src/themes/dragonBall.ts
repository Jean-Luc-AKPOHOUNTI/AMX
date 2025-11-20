import type { Theme } from './types';

export const dragonBallTheme: Theme = {
    name: 'dragon_ball',
    colors: {
        primary: '#FF9900', // Orange Goku
        secondary: '#0000FF', // Bleu tenue
        background: '#1a1a1a', // Fond sombre par défaut en attendant l'image
        text: '#FFFFFF',
        accent: '#FFD700', // Or Super Saiyan
    },
    assets: {
        background: 'url("/assets/dbz-bg.jpg")', // Placeholder
    },
    fonts: {
        primary: '"Saiyan Sans", sans-serif',
    },
};
