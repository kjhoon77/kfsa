import { useEffect } from 'react';

type KeyHandler = (e: KeyboardEvent) => void;

interface KeyMap {
    [key: string]: KeyHandler;
}

export const useHotkeys = (keyMap: KeyMap) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const handler = keyMap[e.key];
            if (handler) {
                e.preventDefault();
                handler(e);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [keyMap]);
};

// Standard Function Keys
export const HOTKEYS = {
    F1: 'F1',
    F2: 'F2', // Search
    F3: 'F3', // New / Insert
    F4: 'F4', // Save
    F5: 'F5',
    F6: 'F6', // Group Search
    F7: 'F7',
    F8: 'F8', // Delete (often)
    F9: 'F9',
    F10: 'F10', // Reset
    F11: 'F11',
    F12: 'F12',
};
