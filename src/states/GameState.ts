import { Game } from "../Game.ts";

export interface GameState {
  handleInput(key: string): void;
  update(): void;
  render(): void;
  enterState(game: Game): void;
}
