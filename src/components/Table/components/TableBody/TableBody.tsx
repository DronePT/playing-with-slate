import React from 'react';

import { RenderElementProps } from 'slate-react';

// import './TableBody.scss';

const TableBody: React.FC<RenderElementProps> = props => {
  return (
    <tbody {...props.attributes} className="table-body">
      {props.children}
    </tbody>
  );
};

export default TableBody;
