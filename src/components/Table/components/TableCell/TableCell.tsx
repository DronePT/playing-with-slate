import React from 'react';

import { RenderElementProps } from 'slate-react';

// import './TableCell.scss';

const TableCell: React.FC<RenderElementProps> = props => {
  return (
    <td {...props.attributes} className="table-cell">
      {props.children}
    </td>
  );
};

export default TableCell;
