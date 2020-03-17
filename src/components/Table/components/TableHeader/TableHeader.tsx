import React from 'react';

import { RenderElementProps } from 'slate-react';

// import './TableHeader.scss';

const TableHeader: React.FC<RenderElementProps> = props => {
  return (
    <thead {...props.attributes} className="table-header">
      {props.children}
    </thead>
  );
};

export default TableHeader;
