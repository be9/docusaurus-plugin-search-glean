import type { LoadContext, Plugin } from '@docusaurus/types';
import { Options } from './options';
export default function searchGlean(context: LoadContext, options: Options): Plugin<void>;
export { validateOptions } from './options';
