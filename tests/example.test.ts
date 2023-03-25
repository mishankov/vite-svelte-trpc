import { expect, it } from "vitest";
import { counter, increaseCounter } from "../src/server/test_data";

it("Counter is  zero by default", () => {
  expect(counter).eq(0);
});

it("Counter increments by one", () => {
  increaseCounter();
  expect(counter).eq(1);
});
