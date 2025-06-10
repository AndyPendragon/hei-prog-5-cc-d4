import { GameState } from "./GameState.ts";
import { Game } from "../Game.ts";
import { RunningState } from "./RunningState.ts";

export class GameOverState implements GameState {
  private game!: Game;
  private finalScore: number;

  constructor(finalScore: number) {
    this.finalScore = finalScore;
  }

  handleInput(key: string): void {
    if (key.toLowerCase() === "r") {
      this.game.setState(new RunningState());
    }
  }

  update(): void {
    // No updates needed in game over state
  }

  render(): void {
    console.clear();
    console.log("Game Over!");
    console.log(`Final Score: ${this.finalScore}`);
    console.log("Press R to restart");
    console.log("Press Ctrl+C to quit");
  }

  enterState(game: Game): void {
    this.game = game;
  }
}
