import { KeyDownStrategyManager } from './KeyDownStrategyManager';
import { ReactEditor } from 'slate-react';

export default (editor: ReactEditor): KeyDownStrategyManager =>
  new KeyDownStrategyManager(
    editor,
    // eslint-disable-next-line no-undef
    new Map([
      ['meta+\\', 'code'],
      ['meta+b', 'bold'],
      ['meta+i', 'italic'],
      ['meta+u', 'underline'],
      ['meta+t', 'table']
    ])
  );
