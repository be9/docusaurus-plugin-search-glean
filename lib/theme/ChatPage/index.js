import { jsx as _jsx } from "react/jsx-runtime";
import Layout from '@theme/Layout';
import Chat from '../Chat';
export default function ChatPage() {
    return (_jsx(Layout, { children: _jsx(Chat, {}) }));
}
