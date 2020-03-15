import React, { useCallback } from 'react';
import { ReactEditor, RenderElementProps, RenderLeafProps } from 'slate-react';
import { KeyDownStrategyManager } from './KeyDownStrategyManager';
import keyDownStrategies from './keyDownStrategies';

// Temporary: Elements
import CodeBlock from '../../components/CodeBlock';
import Paragraph from '../../components/Paragraph';
import Table from '../../components/Table';
import TableRow from '../../components/Table/components/TableRow';
import TableCell from '../../components/Table/components/TableCell';

// Temporary: Leafs
import Leaf from './Leaf';

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

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    const { key, metaKey } = event;

    const keyName = [key];

    if (metaKey) {
      keyName.unshift('meta');
    }

    this.sendKeyPress(keyName.join('+'));
  }

  static elementRenderer(): (props: RenderElementProps) => JSX.Element {
    return useCallback((props: RenderElementProps) => {
      switch (props.element.type) {
        case 'table':
          return <Table {...props} />;
        case 'table-row':
          return <TableRow {...props} />;
        case 'table-cell':
          return <TableCell {...props} />;
        case 'code':
          return <CodeBlock {...props} />;
        default:
          return <Paragraph {...props} />;
      }
    }, []);
  }

  static leafRenderer(): (p: RenderLeafProps) => JSX.Element {
    return useCallback(props => {
      return <Leaf {...props} />;
    }, []);
  }
}

export default CustomEditor;
