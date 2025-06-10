import { Direction } from "../types/Direction.ts";
import { Point } from "../types/Point.ts";

export interface MoveStrategy {
  computeNextPosition(currentPosition: Point, direction: Direction): Point;
}
