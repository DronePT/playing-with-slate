import React, { useCallback } from 'react';
import { RenderElementProps } from 'slate-react';

import CodeBlock from '../../components/CodeBlock';
import Paragraph from '../../components/Paragraph';
import Table from '../../components/Table';
import TableRow from '../../components/Table/components/TableRow';
import TableCell from '../../components/Table/components/TableCell';

// Custom rendering function
const CustomElementRenderer = () =>
  useCallback((props: RenderElementProps) => {
    console.log(props.element.type);
    switch (props.element.type) {
      case 'table':
        return <Table {...props} />;
      case 'table-row':
        return <TableRow {...props} />;
      case 'table-cell':
        return <TableCell {...props} />;
      case 'code':
        return <CodeBlock {...props} />;
      default:
        return <Paragraph {...props} />;
    }
  }, []);

export default CustomElementRenderer;
