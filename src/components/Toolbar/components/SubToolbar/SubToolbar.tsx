import React from 'react';
import {
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowDown as ArrowDownIcon,
  ArrowUp as ArrowUpIcon,
  Delete as DeleteIcon,
  Trash2 as TrashIcon
} from 'react-feather';

import CustomEditor from '../../../../libs/slate/CustomEditor';

import './SubToolbar.scss';

interface SubToolbarProps {
  editor: CustomEditor;
  onTrashClick?: () => void;
}

const SubToolbar: React.FC<SubToolbarProps> = props => {
  const { editor: customEditor } = props;

  return (
    <div className="subtoolbar">
      <div className="subtoolbar__table__columns">
        <button onClick={(): void => customEditor.sendKeyPress('meta+t+c+l')}>
          <ArrowLeftIcon color="#333" size={24} />
        </button>
        <button onClick={(): void => customEditor.sendKeyPress('meta+t+c+r')}>
          <ArrowRightIcon color="#333" size={24} />
        </button>
        <button onClick={(): void => customEditor.sendKeyPress('meta+t+c+del')}>
          <DeleteIcon color="#333" size={24} />
        </button>
      </div>
      <div className="subtoolbar__table__rows">
        <button onClick={(): void => customEditor.sendKeyPress('meta+t+r+u')}>
          <ArrowUpIcon color="#333" size={24} />
        </button>
        <button onClick={(): void => customEditor.sendKeyPress('meta+t+r+d')}>
          <ArrowDownIcon color="#333" size={24} />
        </button>
        <button onClick={(): void => customEditor.sendKeyPress('meta+t+r+del')}>
          <DeleteIcon color="#333" size={24} />
        </button>
      </div>
      <button onClick={(): void => customEditor.sendKeyPress('meta+t+del')}>
        <TrashIcon color="#333" size={24} />
      </button>
    </div>
  );
};

export default SubToolbar;
