import { ReactEditor } from 'slate-react';
export interface CommandStrategy {
  name: string;
  setEditor(editor: ReactEditor): void;
  execute(): void;
}
