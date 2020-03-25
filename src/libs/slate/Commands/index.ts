import { TableRemoveColumnCommand } from './TableRemoveColumnCommand';
import { TableRemoveRowCommand } from './TableRemoveRowCommand';
import { CommandStrategy } from '../CommandStrategy';
import { TableRemoveCommand } from './TableRemoveCommand';

export const availableCommands: CommandStrategy[] = [
  new TableRemoveColumnCommand(),
  new TableRemoveRowCommand(),
  new TableRemoveCommand()
];
