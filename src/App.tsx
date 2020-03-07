import React, { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import { Node } from "slate/dist/interfaces/node";

import "./App.scss";
import Toolbar from "./components/Toolbar";

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState<Node[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]);

  return (
    <div className="app">
      <div className="editor-container">
        <Slate editor={editor} value={value} onChange={v => setValue(v)}>
          <Toolbar />
          <Editable className="editor" />
        </Slate>
      </div>
    </div>
  );
}

export default App;
