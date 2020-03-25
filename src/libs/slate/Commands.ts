import { ReactEditor } from 'slate-react';
import { CommandStrategy } from './CommandStrategy';
import { availableCommands } from './Commands/index';

class Commands {
  private commandsMap: Map<string, CommandStrategy>;
  private _editor: ReactEditor;

  constructor(editor: ReactEditor) {
    this._editor = editor;
    this.commandsMap = new Map(availableCommands.map(cmd => [cmd.name, cmd]));
  }

  getCommand(commandName: string): CommandStrategy {
    const command = this.commandsMap.get(commandName);

    if (!command) {
      throw new Error(`Command '${commandName}' not found.`);
    }

    command.setEditor(this._editor);

    return command;
  }

  addCommand(command: CommandStrategy): Commands {
    this.commandsMap.set(command.name, command);

    return this;
  }
}

export default Commands;
