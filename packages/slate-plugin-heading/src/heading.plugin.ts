import { Plugin } from 'slate-react';
import { Required } from 'utility-types';
import { isHotkey } from 'is-hotkey';
import {
  HEADING_TYPE,
  HEADING_LEVELS,
  HEADING_HOTKEY,
  HEADING_HOTKEYS_MAP,
  HEADING_COMMAND_TOGGLE,
  HEADING_COMMAND_END
} from './heading.constants';
import { HeadingQueries } from './heading.queries';
import { HeadingCommands } from './heading.commands';
import { HeadingRenderer } from './heading.renderer';

export interface HeadingPluginConfig {
  type?: string;
  hotkey?: string;
  disabled?: HEADING_LEVELS[];
}

export interface HeadingPlugin extends Required<Plugin, 'onKeyDown' | 'renderBlock'> {
  queries: HeadingQueries;
  commands: HeadingCommands;
}

export function HeadingPlugin(config?: HeadingPluginConfig): HeadingPlugin {
  /**
   * @todo
   * Refactor to `optional chaning` and `nullish coalescing operator` while `typescript@3.7.1` released.
   */
  const disabled = (config && config.disabled) || [];
  const enabled = HEADING_LEVELS.filter(level => !disabled.includes(level));
  const type = (config && config.type) || HEADING_TYPE;
  const hotkey = (config && config.hotkey) || HEADING_HOTKEY;
  const hotkeys = enabled.reduce(
    (acc, level) => {
      acc.push([level, isHotkey(`${hotkey}+${level}`)]);
      return acc;
    },
    [] as HEADING_HOTKEYS_MAP
  );
  const queries = HeadingQueries(type);
  const commands = HeadingCommands(type);
  const renderer = HeadingRenderer(type);

  return {
    queries,
    commands,
    renderBlock: renderer.renderBlock,
    onKeyDown: (event, editor, next) => {
      if (event.key === 'Enter') {
        commands[HEADING_COMMAND_END](editor);
        return next();
      }

      const [level] = hotkeys.find(([, isSaveHotkey]) => isSaveHotkey(event as any)) || [];

      if (level !== undefined) {
        event.preventDefault();
        commands[HEADING_COMMAND_TOGGLE](editor, level);
        return;
      }

      return next();
    }
  };
}
