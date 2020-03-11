import React, { useCallback } from "react";
import { RenderElementProps } from "slate-react";

import CodeBlock from "../../components/CodeBlock";
import Paragraph from "../../components/Paragraph";

// Custom rendering function
const CustomElementRenderer = () =>
  useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeBlock {...props} />;
      default:
        return <Paragraph {...props} />;
    }
  }, []);

export default CustomElementRenderer;
