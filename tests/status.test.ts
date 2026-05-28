import { describe, it, expect } from "vitest";
import { ok, fail } from "../src/status";

describe("ok()", () => {
  it("returns exactly { ok: true }", () => {
    expect(ok()).toEqual({ ok: true });
  });

  it("returns an object with no extra keys", () => {
    expect(Object.keys(ok())).toEqual(["ok"]);
  });

  it("returns a frozen (immutable) object", () => {
    const status = ok();
    expect(Object.isFrozen(status)).toBe(true);
  });

  it("does not allow mutation of the returned object", () => {
    "use strict";
    const status = ok();
    expect(() => {
      // @ts-expect-error - intentionally attempting an illegal mutation
      status.ok = false;
    }).toThrow();
    expect(status.ok).toBe(true);
  });
});

describe("fail(reason)", () => {
  it("returns exactly { ok: false, reason }", () => {
    expect(fail("boom")).toEqual({ ok: false, reason: "boom" });
  });

  it("returns an object with no extra keys", () => {
    expect(Object.keys(fail("boom")).sort()).toEqual(["ok", "reason"]);
  });

  it("trims surrounding whitespace from the reason", () => {
    expect(fail("  disk full  ")).toEqual({ ok: false, reason: "disk full" });
  });

  it("returns a frozen (immutable) object", () => {
    const status = fail("boom");
    expect(Object.isFrozen(status)).toBe(true);
  });

  it("throws on an empty reason", () => {
    expect(() => fail("")).toThrow();
  });

  it("throws on a whitespace-only reason", () => {
    expect(() => fail("   ")).toThrow();
  });
});
