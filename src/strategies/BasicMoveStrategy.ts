import { Direction } from "../types/Direction.ts";
import { Point } from "../types/Point.ts";
import { MoveStrategy } from "./MoveStrategy.ts";

export class BasicMoveStrategy implements MoveStrategy {
  computeNextPosition(currentPosition: Point, direction: Direction): Point {
    const { x, y } = currentPosition;
    
    let newPosition: Point;
    switch (direction) {
      case Direction.UP:
        newPosition = new Point(x, y - 1);
        break;
      case Direction.DOWN:
        newPosition = new Point(x, y + 1);
        break;
      case Direction.LEFT:
        newPosition = new Point(x - 1, y);
        break;
      case Direction.RIGHT:
        newPosition = new Point(x + 1, y);
        break;
    }
    
    return newPosition;
  }
}
