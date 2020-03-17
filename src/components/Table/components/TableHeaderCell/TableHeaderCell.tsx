import React from 'react';

import { RenderElementProps } from 'slate-react';

// import './TableHeaderCell.scss';

const TableHeaderCell: React.FC<RenderElementProps> = props => {
  return (
    <th {...props.attributes} className="table-header">
      {props.children}
    </th>
  );
};

export default TableHeaderCell;
