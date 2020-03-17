import { ElementOrMarkStrategyManager } from './ElementOrMarkStrategyManager';
import { ReactEditor } from 'slate-react';

import { BoldMark, ItalicMark, UnderlineMark } from './Marks';

import {
  TableElement,
  TableRowElement,
  CodeBlockElement,
  ParagraphElement,
  TableCellElement,
  CodeHighlightElement
} from './Elements';

export default (editor: ReactEditor): ElementOrMarkStrategyManager => {
  const strategies = [
    new BoldMark(editor),
    new ItalicMark(editor),
    new TableElement(editor),
    new UnderlineMark(editor),
    new TableRowElement(editor),
    new TableCellElement(editor),
    new CodeBlockElement(editor),
    new ParagraphElement(editor),
    new CodeHighlightElement(editor)
  ];

  return new ElementOrMarkStrategyManager(strategies);
};
