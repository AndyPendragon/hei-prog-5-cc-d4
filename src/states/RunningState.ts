import { GameState } from "./GameState.ts";
import { Game } from "../Game.ts";
import { Direction } from "../types/Direction.ts";

export class RunningState implements GameState {
  private game!: Game;

  handleInput(key: string): void {
    switch (key.toLowerCase()) {
      case "w":
        this.game.setDirection(Direction.UP);
        break;
      case "s":
        this.game.setDirection(Direction.DOWN);
        break;
      case "a":
        this.game.setDirection(Direction.LEFT);
        break;
      case "d":
        this.game.setDirection(Direction.RIGHT);
        break;
    }
  }

  update(): void {
    this.game.updateGame();
  }

  render(): void {
    this.game.renderGame();
  }

  enterState(game: Game): void {
    this.game = game;
  }
}
