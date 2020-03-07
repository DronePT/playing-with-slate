import React from "react";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon
} from "react-feather";

import "./Toolbar.scss";

interface ToolbarProps {
  onBoldClick?: () => void;
}

const Toolbar: React.FC<ToolbarProps> = props => {
  const { onBoldClick } = props;

  return (
    <div className="toolbar">
      <button onClick={onBoldClick}>
        <BoldIcon color="#333" size={24} />
      </button>
      <button onClick={onBoldClick}>
        <ItalicIcon color="#333" size={24} />
      </button>
      <button onClick={onBoldClick}>
        <UnderlineIcon color="#333" size={24} />
      </button>
    </div>
  );
};

export default Toolbar;
