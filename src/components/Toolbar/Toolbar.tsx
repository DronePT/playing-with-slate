import React, { useState } from 'react';
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Code as CodeIcon,
  Grid as GridIcon
} from 'react-feather';

import './Toolbar.scss';

import CustomEditor from '../../libs/slate/CustomEditor';
import { useSlate } from 'slate-react';
import keyDownStrategies from '../../libs/slate/keyDownStrategies';
import TableSelection from '../Table/components/TableSelection';

interface ToolbarProps {
  editor: CustomEditor;
  onBoldClick?: () => void;
  onItalicClick?: () => void;
  onUnderlineClick?: () => void;
  TableSelection?: () => void;
}

type ButtonClickHandler = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

const Toolbar: React.FC<ToolbarProps> = props => {
  const { editor: customEditor } = props;
  const editor = useSlate();

  const kdStrategies = keyDownStrategies(editor);

  const [isTableSelectionOpen, toggleTableSelection] = useState(false);

  return (
    <div className="toolbar">
      <button onClick={(): void => customEditor.sendKeyPress('meta+b')}>
        <BoldIcon
          color="#333"
          size={24}
          strokeWidth={kdStrategies.getStrategy('meta+b')?.isActive ? 4 : 2}
        />
      </button>
      <button onClick={(): void => customEditor.sendKeyPress('meta+i')}>
        <ItalicIcon
          color="#333"
          size={24}
          strokeWidth={kdStrategies.getStrategy('meta+i')?.isActive ? 4 : 2}
        />
      </button>
      <button onClick={(): void => customEditor.sendKeyPress('meta+u')}>
        <UnderlineIcon
          color="#333"
          size={24}
          strokeWidth={kdStrategies.getStrategy('meta+u')?.isActive ? 4 : 2}
        />
      </button>
      <button onClick={(): void => customEditor.sendKeyPress('meta+\\')}>
        <CodeIcon
          color="#333"
          size={24}
          strokeWidth={kdStrategies.getStrategy('meta+\\')?.isActive ? 4 : 2}
        />
      </button>
      <div style={{ position: 'relative' }}>
        <button onClick={(): void => toggleTableSelection(true)}>
          <GridIcon
            color="#333"
            size={24}
            strokeWidth={kdStrategies.getStrategy('meta+t')?.isActive ? 4 : 2}
          />
        </button>
        {isTableSelectionOpen && (
          <TableSelection
            editor={editor}
            onSelection={(): void => toggleTableSelection(false)}
          />
        )}
      </div>
      {/* <button onClick={(): void => customEditor.sendKeyPress('meta+t')}>
        <GridIcon
          color="#333"
          size={24}
          strokeWidth={kdStrategies.getStrategy('meta+t')?.isActive ? 4 : 2}
        />
      </button> */}
    </div>
  );
};

export default Toolbar;
