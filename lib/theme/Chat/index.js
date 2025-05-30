import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import GleanWebSDK from '@gleanwork/web-sdk';
import useThemeChange from '../../hooks/useThemeChange';
export default function ChatPage() {
    const containerRef = useRef(null);
    const { options } = usePluginData('docusaurus-plugin-search-glean');
    const initializeChat = (themeVariant = 'light') => {
        if (containerRef.current) {
            GleanWebSDK.renderChat(containerRef.current, {
                ...(options.chatOptions || {}),
                themeVariant,
            });
        }
    };
    const initialTheme = useThemeChange((theme) => {
        initializeChat(theme);
    });
    useEffect(() => {
        initializeChat(initialTheme);
    });
    return (_jsx("div", { ref: containerRef, style: {
            height: '85vh', // 85% of the viewport height; this is required for the chat to render
            width: '100%',
            position: 'relative',
        } }));
}
