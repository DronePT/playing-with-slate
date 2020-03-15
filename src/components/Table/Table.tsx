import React from 'react';

import { RenderElementProps } from 'slate-react';

import './Table.scss';

const Table: React.FC<RenderElementProps> = props => {
  return (
    <pre {...props.attributes} className="Table">
      <code>{props.children}</code>
    </pre>
  );
};

export default Table;
