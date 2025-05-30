import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { SearchButton } from '../SearchButton';
import { useGleanConfig } from '../../utils';
import useThemeChange from '../../hooks/useThemeChange';
export default function SearchBarWrapper() {
    const containerRef = useRef(null);
    const { options } = useGleanConfig();
    const initializeSearch = (themeVariant = 'light') => {
        if (containerRef.current) {
            import('@gleanwork/web-sdk').then(({ attach }) => {
                attach(containerRef.current, {
                    ...options.searchOptions,
                    themeVariant,
                });
            });
        }
    };
    const initialTheme = useThemeChange((theme) => {
        initializeSearch(theme);
    });
    useEffect(() => {
        initializeSearch(initialTheme);
    });
    return (_jsx("span", { ref: containerRef, children: _jsx(SearchButton, {}) }));
}
