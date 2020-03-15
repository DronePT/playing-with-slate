import React from 'react';
import { RenderLeafProps } from 'slate-react';
import clsx from 'clsx';

import './Leaf.scss';

const Leaf: React.FC<RenderLeafProps> = props => {
  const { bold, italic, underline } = props.leaf;

  const className = clsx({
    'is-bold': bold,
    'is-italic': italic,
    'is-underline': underline
  });

  return (
    <span {...props.attributes} className={className}>
      {props.children}
    </span>
  );
};

export default Leaf;
