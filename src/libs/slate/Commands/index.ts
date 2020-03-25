import { TableRemoveColumnCommand } from './TableRemoveColumnCommand';
import { TableRemoveRowCommand } from './TableRemoveRowCommand';
import { CommandStrategy } from '../CommandStrategy';

export const availableCommands: CommandStrategy[] = [
  new TableRemoveColumnCommand(),
  new TableRemoveRowCommand()
];
