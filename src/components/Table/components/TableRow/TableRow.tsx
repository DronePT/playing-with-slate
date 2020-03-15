import React from 'react';

import { RenderElementProps } from 'slate-react';

// import './TableRow.scss';

const TableRow: React.FC<RenderElementProps> = props => {
  console.log(props);

  return (
    <tr {...props.attributes} className="TableRow">
      {props.children}
    </tr>
  );
};

export default TableRow;
