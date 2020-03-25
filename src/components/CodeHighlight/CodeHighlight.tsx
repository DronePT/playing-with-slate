import React from 'react';
import { RenderElementProps } from 'slate-react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeHighlight.scss';

const CodeHighlight: React.FC<RenderElementProps> = props => {
  const { attributes, children, element } = props;

  return (
    <div {...attributes}>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        showLineNumbers={true}
      >
        {element.children[0].code}
      </SyntaxHighlighter>
      <div>{children}</div>
    </div>
  );
};

export default CodeHighlight;
