import React from 'react';
import { RenderElementProps } from 'slate-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeHighlight.scss';

const CodeHighlight: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element
}) => {
  return (
    <div {...attributes}>
      <SyntaxHighlighter
        language="javascript"
        style={tomorrowNight}
        showLineNumbers={true}
      >
        {element.children[0].code}
      </SyntaxHighlighter>
      <div>{children}</div>
    </div>
  );
};

export default CodeHighlight;
