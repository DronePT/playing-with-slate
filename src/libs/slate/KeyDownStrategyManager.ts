import { ReactEditor } from 'slate-react';
import { KeyDownStrategy } from './KeyDownStrategy';

import { BoldMarkToggler } from './Marks/BoldMarkToggler';
import { CodeBlockElement } from './Elements/CodeBlockElement';
import { TableElement } from './Elements/TableElement';
import { ItalicMarkToggler } from './Marks/ItalicMarkToggler';
import { UnderlineMarkToggler } from './Marks/UnderlineMarkToggler';

type KeyCombination = string;
type ElementOrLeafName = string;

export class KeyDownStrategyManager {
  private strategies: KeyDownStrategy[] = [];
  // eslint-disable-next-line no-undef
  private strategiesMap: Map<string, KeyDownStrategy> = new Map();
  private keysMapping: Map<string, string>;

  constructor(
    editor: ReactEditor,
    keysMapping: Map<KeyCombination, ElementOrLeafName>
  ) {
    this.keysMapping = keysMapping;

    this.strategies = [
      new TableElement(editor),
      new CodeBlockElement(editor),
      new BoldMarkToggler(editor),
      new ItalicMarkToggler(editor),
      new UnderlineMarkToggler(editor)
    ];

    this._buildStrategyMap();
  }

  private _buildStrategyMap(): void {
    this.strategies.forEach(strategy =>
      this.strategiesMap.set(strategy.strategyName, strategy)
    );
  }

  addStrategy(strategy: KeyDownStrategy): void {
    this.strategies.push(strategy);

    this.strategiesMap.set(strategy.strategyName, strategy);
  }

  getStrategy(keyCombination: string): KeyDownStrategy | undefined {
    return this.strategiesMap.get(this.keysMapping.get(keyCombination) || '');
  }
}
