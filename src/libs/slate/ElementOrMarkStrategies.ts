import { ElementOrMarkStrategyManager } from './ElementOrMarkStrategyManager';
import { ReactEditor } from 'slate-react';

import { BoldMark } from './Marks/BoldMark';
import { ItalicMark } from './Marks/ItalicMark';
import { UnderlineMark } from './Marks/UnderlineMark';

import { TableHeaderElement } from './Elements/TableHeaderElement';
import { TableHeaderCellElement } from './Elements/TableHeaderCellElement';
import { TableBodyElement } from './Elements/TableBodyElement';
import { TableRemoveRowElement } from './Elements/TableRemoveRow';

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
    new TableBodyElement(editor),
    new TableCellElement(editor),
    new CodeBlockElement(editor),
    new ParagraphElement(editor),
    new TableHeaderElement(editor),
    new CodeHighlightElement(editor),
    new TableHeaderCellElement(editor),
    new TableRemoveRowElement(editor)
  ];

  return new ElementOrMarkStrategyManager(strategies);
};
