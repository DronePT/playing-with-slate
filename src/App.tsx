import React, { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

import { Node } from "slate/dist/interfaces/node";

import "./App.scss";
import Toolbar from "./components/Toolbar";
import customElementRenderer from "./libs/slate/CustomEelementRenderer";
import customLeafRenderer from "./libs/slate/CustomLeafRenderer";
import CustomEditor from "./libs/slate/CustomEditor";

function App() {
  const editor = useMemo<ReactEditor>(() => withReact(createEditor()), []);
  const customEditor = useMemo<CustomEditor>(() => new CustomEditor(editor), [
    editor
  ]);

  const [value, setValue] = useState<Node[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]);

  const renderElement = customElementRenderer();
  const renderLeaf = customLeafRenderer();

  return (
    <div className="app">
      <div className="editor-container">
        <Slate editor={editor} value={value} onChange={v => setValue(v)}>
          <Toolbar />
          <Editable
            className="editor"
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={event => customEditor.handleKeyDown(event)}
          />
        </Slate>
      </div>
    </div>
  );
}

export default App;
