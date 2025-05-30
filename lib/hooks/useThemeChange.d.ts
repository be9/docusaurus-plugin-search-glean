import type { ThemeVariant } from '@gleanwork/web-sdk';
interface ThemeChangeCallback {
    (theme: ThemeVariant): void;
}
export default function useThemeChange(callback: ThemeChangeCallback): ThemeVariant;
export {};
