import { Point } from "../types/Point.ts";

export class FoodFactory {
  private readonly gridSize: number;

  constructor(gridSize: number) {
    this.gridSize = gridSize;
  }

  generateFood(snakeBody: Point[]): Point {
    let food: Point;
    let attempts = 0;
    
    do {
      attempts++;
      food = new Point(
        Math.floor(Math.random() * this.gridSize),
        Math.floor(Math.random() * this.gridSize)
      );
    } while (this.isOnSnake(food, snakeBody));
    
    return food;
  }

  private isOnSnake(point: Point, snakeBody: Point[]): boolean {
    return snakeBody.some(segment => segment.equals(point));
  }
}
