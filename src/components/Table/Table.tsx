import React from 'react';

import { RenderElementProps } from 'slate-react';

import './Table.scss';

const Table: React.FC<RenderElementProps> = props => {
  return (
    <table className="table" {...props.attributes}>
      {props.children}
    </table>
  );
};

export default Table;
