import { ReactEditor } from 'slate-react';
import { EditorKeyDownEvent } from "./EditorKeyDownEvent";

import { BoldMarkToggler } from './Marks/BoldMarkToggler';
import { CodeBlockElement } from './Elements/CodeBlockElement';
import { ItalicMarkToggler } from './Marks/ItalicMarkToggler';
import { UnderlineMarkToggler } from './Marks/UnderlineMarkToggler';

export class EditorKeyDownToggler {
  static getToggler(name: string, editor: ReactEditor): EditorKeyDownEvent | undefined {
    switch (name) {
      case '\\': return new CodeBlockElement(editor);
      case 'b': return new BoldMarkToggler(editor);
      case 'i': return new ItalicMarkToggler(editor);
      case 'u': return new UnderlineMarkToggler(editor);
    }
  }
}
