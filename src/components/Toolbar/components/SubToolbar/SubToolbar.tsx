import React from 'react';
import { Trash2 as TrashIcon } from 'react-feather';

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
      <button onClick={(): void => customEditor.sendKeyPress('meta+t+d')}>
        <TrashIcon color="#333" size={24} />
      </button>
    </div>
  );
};

export default SubToolbar;
