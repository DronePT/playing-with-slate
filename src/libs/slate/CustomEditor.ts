import { ReactEditor } from 'slate-react';
import { KeyDownStrategyManager } from './KeyDownStrategyManager';
import keyDownStrategies from './keyDownStrategies';

class CustomEditor {
  private keyDownStrategyManager: KeyDownStrategyManager;

  constructor(editor: ReactEditor) {
    this.keyDownStrategyManager = keyDownStrategies(editor);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  sendKeyPress(keyCombination: string): void {
    const keyDownStrategy = this.keyDownStrategyManager.getStrategy(
      keyCombination
    );

    keyDownStrategy?.toggle();
  }

  sendKeyPress(keyCombination: string): void {
    const keyDownStrategy = this.keyDownStrategyManager.getStrategy(
      keyCombination
    );

    keyDownStrategy?.toggle();
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    const { key, metaKey } = event;

    const keyName = [key];

    if (metaKey) {
      keyName.unshift('meta');
    }

    this.sendKeyPress(keyName.join('+'));
  }
}

export default CustomEditor;
