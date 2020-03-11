import { ReactEditor } from 'slate-react';
import { KeyDownStrategyManager } from './KeyDownStrategyManager';

class CustomEditor {
  private keyDownStrategyManager: KeyDownStrategyManager;

  constructor(editor: ReactEditor) {
    this.keyDownStrategyManager = new KeyDownStrategyManager(editor, new Map([
      ['meta+\\', 'code'],
      ['meta+b', 'bold'],
      ['meta+i', 'italic'],
      ['meta+u', 'underline'],
    ]))
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    const keyName = [event.key];

    if (event.metaKey) {
      keyName.unshift('meta')
    }

    const keyDownStrategy = this.keyDownStrategyManager.getStrategy(keyName.join('+'));

    keyDownStrategy?.toggle()

    console.log('keyName', keyName)
  }
}

export default CustomEditor
