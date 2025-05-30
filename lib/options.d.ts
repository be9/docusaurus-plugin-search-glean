import type { OptionValidationContext } from '@docusaurus/types';
import { ChatOptions, ModalSearchOptions } from '@gleanwork/web-sdk';
export type PluginOptions = {
    searchOptions: Partial<ModalSearchOptions> | false;
    chatOptions: Partial<ChatOptions> | false;
    chatPagePath: string;
};
export type Options = Partial<PluginOptions>;
export declare const DEFAULT_PLUGIN_OPTIONS: PluginOptions;
export declare function arrayMerger(objValue: unknown[], srcValue: unknown[]): unknown[] | undefined;
export declare function normalizePluginOptions(...options: Partial<Options>[]): PluginOptions;
export declare function validateOptions({ validate, options, }: OptionValidationContext<Options, PluginOptions>): PluginOptions;
