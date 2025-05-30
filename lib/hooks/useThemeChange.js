import { useEffect, useState } from 'react';
export default function useThemeChange(callback) {
    const [theme, setTheme] = useState(() => {
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
        return savedTheme === 'dark' ? 'dark' : 'light';
    });
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
                const newTheme = event.newValue;
                setTheme(newTheme);
                callback(newTheme);
            }
        };
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('DOMContentLoaded', () => {
            const currentTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
            setTheme(currentTheme);
            callback(currentTheme);
        });
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [callback]);
    return theme;
}
