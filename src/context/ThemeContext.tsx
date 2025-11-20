import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Theme } from '../themes/types';
import { dragonBallTheme } from '../themes/dragonBall';

interface ThemeContextType {
    currentTheme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(dragonBallTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', currentTheme.colors.primary);
        root.style.setProperty('--secondary-color', currentTheme.colors.secondary);
        root.style.setProperty('--background-color', currentTheme.colors.background);
        root.style.setProperty('--text-color', currentTheme.colors.text);
        root.style.setProperty('--accent-color', currentTheme.colors.accent);
        root.style.setProperty('--font-primary', currentTheme.fonts.primary);

        if (currentTheme.assets.background) {
            // Handle background image specifically if needed, or just use a class
            document.body.style.backgroundImage = currentTheme.assets.background;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
        }
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
