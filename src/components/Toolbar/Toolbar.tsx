import React from "react";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon
} from "react-feather";

import "./Toolbar.scss";

interface ToolbarProps {
  onBoldClick?: () => void;
  onItalicClick?: () => void;
  onUnderlineClick?: () => void;
}

const Toolbar: React.FC<ToolbarProps> = props => {
  const { onBoldClick, onItalicClick, onUnderlineClick } = props;

  return (
    <div className="toolbar">
      <button onClick={onBoldClick}>
        <BoldIcon color="#333" size={24} />
      </button>
      <button onClick={onItalicClick}>
        <ItalicIcon color="#333" size={24} />
      </button>
      <button onClick={onUnderlineClick}>
        <UnderlineIcon color="#333" size={24} />
      </button>
    </div>
  );
};

export default Toolbar;
