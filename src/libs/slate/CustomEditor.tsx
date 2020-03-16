import React, { useCallback } from 'react';
import { ReactEditor, RenderElementProps, RenderLeafProps } from 'slate-react';
import { ElementOrMarkStrategyManager } from './ElementOrMarkStrategyManager';
import elementOrMarkStrategies from './ElementOrMarkStrategies';

import Leaf from './Leaf';

class CustomEditor {
  private keyDownStrategyManager: ElementOrMarkStrategyManager;

  constructor(editor: ReactEditor) {
    this.keyDownStrategyManager = elementOrMarkStrategies(editor);

    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  static elementRenderer(
    editor: ReactEditor
  ): (props: RenderElementProps) => JSX.Element {
    const elementsOrMarks = elementOrMarkStrategies(editor);

    return useCallback(
      (props: RenderElementProps) => {
        const elementOrMark = elementsOrMarks.getStrategy(props.element.type);

        if (!elementOrMark || !elementOrMark.render) {
          return <div {...props} />;
        }

        return elementOrMark.render(props);
      },
      [elementsOrMarks]
    );
  }

  static leafRenderer(): (p: RenderLeafProps) => JSX.Element {
    return useCallback(props => {
      return <Leaf {...props} />;
    }, []);
  }
}

export default CustomEditor;
