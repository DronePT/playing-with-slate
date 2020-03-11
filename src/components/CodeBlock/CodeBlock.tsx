import React from "react";

import { RenderElementProps } from "slate-react";

import "./CodeBlock.scss";

const CodeBlock: React.FC<RenderElementProps> = props => {
  return (
    <pre {...props.attributes} className="CodeBlock">
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeBlock;
