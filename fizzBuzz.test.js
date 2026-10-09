import { fizzBuzz } from "./fizzBuzz.js";
import assert from "node:assert";
import test from "node:test";

describe("division by 3", () => {
  test("3 returns fizz", () => {
    assert.equal(fizzbuzz(3), "fizz");
  });
});
