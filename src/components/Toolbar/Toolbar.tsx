import React from 'react';
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Code as CodeIcon
} from 'react-feather';

import './Toolbar.scss';

import CustomEditor from '../../libs/slate/CustomEditor';

interface ToolbarProps {
  editor: CustomEditor;
  onBoldClick?: () => void;
  onItalicClick?: () => void;
  onUnderlineClick?: () => void;
}

type ButtonClickHandler = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

const Toolbar: React.FC<ToolbarProps> = props => {
  const { editor } = props;

  return (
    <div className="toolbar">
      <button onClick={(): void => editor.sendKeyPress('meta+b')}>
        <BoldIcon color="#333" size={24} strokeWidth={4} />
      </button>
      <button onClick={(): void => editor.sendKeyPress('meta+i')}>
        <ItalicIcon color="#333" size={24} />
      </button>
      <button onClick={(): void => editor.sendKeyPress('meta+u')}>
        <UnderlineIcon color="#333" size={24} />
      </button>
      <button onClick={(): void => editor.sendKeyPress('meta+\\')}>
        <CodeIcon color="#333" size={24} />
      </button>
    </div>
  );
};

export default Toolbar;
