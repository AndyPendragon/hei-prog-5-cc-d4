import { Direction } from "../types/Direction.ts";
import { Point } from "../types/Point.ts";
import { MoveStrategy } from "../strategies/MoveStrategy.ts";

export class Snake {
  private body: Point[];
  private direction: Direction;
  private moveStrategy: MoveStrategy;

  constructor(
    initialPosition: Point,
    initialDirection: Direction,
    moveStrategy: MoveStrategy,
    initialLength = 1
  ) {
    this.body = Array(initialLength)
      .fill(null)
      .map((_, i) => new Point(initialPosition.x - i, initialPosition.y));
    this.direction = initialDirection;
    this.moveStrategy = moveStrategy;
  }

  move(): void {
    const newHead = this.moveStrategy.computeNextPosition(
      this.body[0],
      this.direction
    );
    this.body.unshift(newHead);
    this.body.pop();
  }

  grow(): void {
    const tail = this.body[this.body.length - 1];
    this.body.push(new Point(tail.x, tail.y));
  }

  setDirection(newDirection: Direction): void {
    const oppositeDirections = {
      [Direction.UP]: Direction.DOWN,
      [Direction.DOWN]: Direction.UP,
      [Direction.LEFT]: Direction.RIGHT,
      [Direction.RIGHT]: Direction.LEFT,
    };

    if (oppositeDirections[newDirection] !== this.direction) {
      this.direction = newDirection;
    }
  }

  getHead(): Point {
    return this.body[0];
  }

  getBody(): Point[] {
    return [...this.body];
  }

  collidesWith(point: Point): boolean {
    return this.body.some(segment => segment.equals(point));
  }

  collidesWithSelf(): boolean {
    const head = this.getHead();
    return this.body.slice(1).some(segment => segment.equals(head));
  }
}
