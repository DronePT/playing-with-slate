export interface KeyDownStrategy {
  strategyName: string;
  isActive: boolean;
  toggle(): void;
}
