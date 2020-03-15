import React from 'react';

import { RenderElementProps } from 'slate-react';

// import './TableCell.scss';

const TableCell: React.FC<RenderElementProps> = props => {
  console.log(props);

  return (
    <td {...props.attributes} className="TableCell">
      {props.children}
    </td>
  );
};

export default TableCell;
