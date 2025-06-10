import { Snake } from "./models/Snake.ts";
import { Point } from "./types/Point.ts";
import { Direction } from "./types/Direction.ts";
import { FoodFactory } from "./factory/FoodFactory.ts";
import { BasicMoveStrategy } from "./strategies/BasicMoveStrategy.ts";
import { GameState } from "./states/GameState.ts";
import { GameOverState } from "./states/GameOverState.ts";
import { RunningState } from "./states/RunningState.ts";
import process from "node:process";
import { log } from "node:console";

export class Game {
  private static readonly GRID_SIZE = 10;
  private static readonly TICK_RATE = 200;

  private snake!: Snake;
  private food!: Point;
  private foodFactory: FoodFactory;
  private grid: string[][];
  private score: number;
  private currentState!: GameState;
  private intervalId: number | undefined;

  constructor() {
    this.grid = Array(Game.GRID_SIZE).fill(0).map(() => Array(Game.GRID_SIZE).fill(" "));
    this.foodFactory = new FoodFactory(Game.GRID_SIZE);
    this.score = 0;
    
    const moveStrategy = new BasicMoveStrategy();
    this.snake = new Snake(
      new Point(5, 5),
      Direction.RIGHT,
      moveStrategy
    );
    
    this.food = this.foodFactory.generateFood(this.snake.getBody());

    this.setState(new RunningState());
    this.setupInput();
  }

  private resetGame(): void {
    const moveStrategy = new BasicMoveStrategy();
    this.snake = new Snake(
      new Point(5, 5),
      Direction.RIGHT,
      moveStrategy
    );
    this.food = this.foodFactory.generateFood(this.snake.getBody());
    this.score = 0;
  }

  private setupInput(): void {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", (data) => {
      const key = data.toString();
      if (key === "\u0003") {
        process.exit();
      }
      this.currentState.handleInput(key);
    });
  }

  setState(state: GameState): void {
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.currentState = state;
    this.currentState.enterState(this);

    if (!(state instanceof GameOverState)) {
      this.startGameLoop();
    }
  }

  private startGameLoop(): void {
    this.intervalId = setInterval(() => {
      this.currentState.update();
      this.currentState.render();
    }, Game.TICK_RATE);
  }

  setDirection(direction: Direction): void {
    this.snake.setDirection(direction);
  }

  updateGame(): void {
    this.snake.move();
    const head = this.snake.getHead();

    if (this.isOutOfBounds(head)) {
      this.setState(new GameOverState(this.score));
      return;
    }

    if (this.snake.collidesWithSelf()) {
      this.setState(new GameOverState(this.score));
      return;
    }

    if (head.equals(this.food)) {
      this.score++;
      this.snake.grow();
      this.food = this.foodFactory.generateFood(this.snake.getBody());
    }
  }

  private isOutOfBounds(point: Point): boolean {
    return (
      point.x < 0 ||
      point.x >= Game.GRID_SIZE ||
      point.y < 0 ||
      point.y >= Game.GRID_SIZE
    );
  }

  renderGame(): void {
    log("Rendering game...");
    this.grid = this.grid.map(row => row.map(() => " "));

    this.snake.getBody().forEach((segment, i) => {
      this.grid[segment.y][segment.x] = i === 0 ? "O" : "o";
    });

    this.grid[this.food.y][this.food.x] = "*";

    console.clear();
    console.log("┌──────────────────────┐");
    for (let y = 0; y < Game.GRID_SIZE; y++) {
      console.log("│ " + this.grid[y].join(" ") + "  │");
    }
    console.log("└──────────────────────┘");
    console.log(`Score: ${this.score} | Arrow keys to move, Ctrl+C to quit`);
  }
}
