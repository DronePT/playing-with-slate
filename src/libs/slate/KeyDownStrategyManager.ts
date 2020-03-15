import { ReactEditor } from 'slate-react';
import { KeyDownStrategy } from './KeyDownStrategy';

import { BoldMarkToggler } from './Marks/BoldMarkToggler';
import { CodeBlockElement } from './Elements/CodeBlockElement';
import { ItalicMarkToggler } from './Marks/ItalicMarkToggler';
import { UnderlineMarkToggler } from './Marks/UnderlineMarkToggler';

export class KeyDownStrategyManager {
  private stratagies: KeyDownStrategy[] = [];
  // eslint-disable-next-line no-undef
  private stratagiesMap: Map<string, KeyDownStrategy> = new Map();
  private keysMapping: Map<string, string>;

  constructor(editor: ReactEditor, keysMapping: Map<string, string>) {
    this.keysMapping = keysMapping;

    this.stratagies = [
      new CodeBlockElement(editor),
      new BoldMarkToggler(editor),
      new ItalicMarkToggler(editor),
      new UnderlineMarkToggler(editor)
    ];

    this._buildStrategyMap();
  }

  private _buildStrategyMap(): void {
    this.stratagies.forEach(strategy =>
      this.stratagiesMap.set(strategy.strategyName, strategy)
    );
  }

  addStrategy(strategy: KeyDownStrategy): void {
    this.stratagies.push(strategy);

    this.stratagiesMap.set(strategy.strategyName, strategy);
  }

  getStrategy(keyName: string): KeyDownStrategy | undefined {
    return this.stratagiesMap.get(this.keysMapping.get(keyName) || '');
  }
}
