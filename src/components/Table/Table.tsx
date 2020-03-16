import React from 'react';

import { RenderElementProps } from 'slate-react';

import './Table.scss';

const Table: React.FC<RenderElementProps> = props => {
  return (
    <table className="Table">
      <tbody {...props.attributes}>{props.children}</tbody>
    </table>
  );
};

export default Table;
