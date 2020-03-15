import { ElementOrMarkStrategy } from './ElementOrMarkStrategy';

export class ElementOrMarkStrategyManager {
  private strategies: ElementOrMarkStrategy[] = [];
  // eslint-disable-next-line no-undef
  private strategiesMap: Map<string, ElementOrMarkStrategy> = new Map();

  constructor(strategies?: ElementOrMarkStrategy[]) {
    this.strategies = strategies || [];

    this._buildStrategyMap();
  }

  private _buildStrategyMap(): void {
    this.strategies.forEach(strategy => this.addStrategyToMap(strategy));
  }

  private addStrategyToMap(strategy: ElementOrMarkStrategy): void {
    // Mapping by name
    this.strategiesMap.set(`sn_${strategy.strategyName}`, strategy);
    // Mapping by keyboard shortcut
    this.strategiesMap.set(`sc_${strategy.keyboardShortcut}`, strategy);
  }

  addStrategy(strategy: ElementOrMarkStrategy): void {
    this.strategies.push(strategy);

    this.addStrategyToMap(strategy);
  }

  getStrategy<T extends ElementOrMarkStrategy>(
    value: string
  ): T | ElementOrMarkStrategy | undefined {
    // Get first from name else from shortcuts mapping
    const getStrategyFrom = this.strategiesMap.has(`sn_${value}`) ? 'sn' : 'sc';

    return this.strategiesMap.get(`${getStrategyFrom}_${value}`);
  }
}
