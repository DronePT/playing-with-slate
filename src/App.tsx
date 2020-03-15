import React, { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { withHistory } from 'slate-history';

import { Node } from 'slate/dist/interfaces/node';

import './App.scss';
import Toolbar from './components/Toolbar';
import customElementRenderer from './libs/slate/CustomElementRenderer';
import customLeafRenderer from './libs/slate/CustomLeafRenderer';
import CustomEditor from './libs/slate/CustomEditor';

const App: React.FC = () => {
  const editor = useMemo<ReactEditor>(
    () => withReact(withHistory(createEditor())),
    []
  );
  const customEditor = useMemo<CustomEditor>(() => new CustomEditor(editor), [
    editor
  ]);

  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }]
    }
  ]);

  const renderElement = customElementRenderer();
  const renderLeaf = customLeafRenderer();

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
            renderElement={renderElement}
            renderLeaf={renderLeaf}
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
