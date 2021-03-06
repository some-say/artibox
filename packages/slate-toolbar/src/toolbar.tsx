import React from 'react';
import { ForPlugin } from '@artibox/slate-common';
import { createCommonEditorRenderer } from '@artibox/slate-common/renderers/common-editor';
import { WithTools } from './typings';
import ToolbarComponent from './components/toolbar';
import './styles';

export interface ToolbarForPluginConfig extends WithTools {
  /**
   * The blacklist of nodes.
   * If some nodes in the current selection is in the blacklist, toolbar will hide.
   */
  disabledBlocks?: string[];
  disabledInlines?: string[];
}

export type Toolbar = ForPlugin<ToolbarForPluginConfig>;

export const Toolbar: Toolbar = {
  forPlugin(config) {
    const { collapsedTools, expandedTools, disabledBlocks, disabledInlines } = config || {};

    return createCommonEditorRenderer({
      render(editor, el) {
        if (
          (disabledBlocks && editor.value.blocks.some(block => disabledBlocks.includes(block!.type))) ||
          (disabledInlines && editor.value.inlines.some(inline => disabledInlines.includes(inline!.type)))
        ) {
          return el;
        }

        return (
          <>
            {el}
            <ToolbarComponent collapsedTools={collapsedTools} expandedTools={expandedTools} editor={editor} />
          </>
        );
      }
    });
  }
};
