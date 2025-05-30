import { normalizeUrl } from '@docusaurus/utils';
import { normalizePluginOptions } from './options';
export default function searchGlean(context, options) {
    const { baseUrl } = context;
    options = normalizePluginOptions({}, options);
    return {
        name: 'docusaurus-plugin-search-glean',
        getThemePath() {
            return '../lib/theme';
        },
        getTypeScriptThemePath() {
            return '../src/theme';
        },
        contentLoaded({ actions: { addRoute, setGlobalData } }) {
            setGlobalData({ options });
            if (!options.chatOptions) {
                return;
            }
            if (options.chatPagePath) {
                addRoute({
                    path: normalizeUrl([baseUrl, options.chatPagePath]),
                    component: '@theme/ChatPage',
                    exact: true,
                });
            }
        },
    };
}
export { validateOptions } from './options';
