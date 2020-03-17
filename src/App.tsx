import React, { useState, useMemo } from 'react';
import { createEditor, Editor, Element } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { withHistory } from 'slate-history';

import { Node } from 'slate/dist/interfaces/node';

import './App.scss';
import Toolbar from './components/Toolbar';
import CustomEditor from './libs/slate/CustomEditor';

const withCodeHighlight = <T extends Editor>(editor: T): T => {
  const { isVoid } = editor;

  editor.isVoid = (element: Element): boolean =>
    element.type === 'code-highlight' ? true : isVoid(element);

  return editor;
};

const App: React.FC = () => {
  const editor = useMemo<ReactEditor>(
    () => withReact(withCodeHighlight(withHistory(createEditor()))),
    []
  );
  const customEditor = useMemo<CustomEditor>(() => new CustomEditor(editor), [
    editor
  ]);

  const [value, setValue] = useState<Node[]>([
    {
      // type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }]
    }
  ]);

  return (
    <div className="app">
      <div className="editor-container">
        <Slate
          editor={editor}
          value={value}
          onChange={(v): void => setValue(v)}
        >
          <Toolbar editor={customEditor} />
          <Editable
            className="editor"
            renderElement={CustomEditor.elementRenderer(editor)}
            renderLeaf={CustomEditor.leafRenderer()}
            onKeyDown={customEditor.handleKeyDown}
          />
        </Slate>
      </div>
      <div className="debug-container">
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
