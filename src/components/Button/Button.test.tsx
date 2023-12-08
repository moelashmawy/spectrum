import Button from "./Button";
import { createSnapshot } from "../../utils/test";

describe("Button", () => {
  test("Button snapshot for primary variant", () => {
    createSnapshot(<Button variant="primary">Click me</Button>);
  });

  test("Button snapshot for secondary variant", () => {
    createSnapshot(<Button variant="secondary">Click me</Button>);
  });

  test("Button snapshot for success variant", () => {
    createSnapshot(<Button variant="success">Click me</Button>);
  });
});
