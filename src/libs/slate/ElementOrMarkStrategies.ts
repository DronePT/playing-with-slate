import { ElementOrMarkStrategyManager } from './ElementOrMarkStrategyManager';
import { ReactEditor } from 'slate-react';

import { BoldMark } from './Marks/BoldMark';
import { CodeBlockElement } from './Elements/CodeBlockElement';
import { ItalicMark } from './Marks/ItalicMark';
import { UnderlineMark } from './Marks/UnderlineMark';
import { TableElement } from './Elements/TableElement';
import { TableHeaderElement } from './Elements/TableHeaderElement';
import { TableHeaderCellElement } from './Elements/TableHeaderCellElement';
import { TableBodyElement } from './Elements/TableBodyElement';
import { TableRowElement } from './Elements/TableRowElement';
import { TableCellElement } from './Elements/TableCellElement';
import { ParagraphElement } from './Elements/ParagraphElement';

export default (editor: ReactEditor): ElementOrMarkStrategyManager => {
  const strategies = [
    new TableElement(editor),
    new TableHeaderElement(editor),
    new TableHeaderCellElement(editor),
    new TableBodyElement(editor),
    new TableRowElement(editor),
    new TableCellElement(editor),
    new CodeBlockElement(editor),
    new ParagraphElement(editor),
    new BoldMark(editor),
    new ItalicMark(editor),
    new UnderlineMark(editor)
  ];

  return new ElementOrMarkStrategyManager(strategies);
};
