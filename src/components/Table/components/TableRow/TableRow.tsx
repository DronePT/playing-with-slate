import React from 'react';

import { RenderElementProps } from 'slate-react';

// import './TableRow.scss';

const TableRow: React.FC<RenderElementProps> = props => {
  return (
    <tr {...props.attributes} className="table-row">
      {props.children}
    </tr>
  );
};

export default TableRow;
