/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { PluginOptions } from '../options';
/**
 * Formats the page's title based on relevant site config and other contexts.
 */
export declare function useTitleFormatter(title?: string | undefined): string;
export declare function useGleanConfig(): {
    options: PluginOptions;
};
