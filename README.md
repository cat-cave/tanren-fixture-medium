# tanren-fixture-medium

This is a Tanren acceptance fixture (medium tier). It is a minimal Node + TypeScript + vitest repo used as the target of an automated agentic-coding run. The two status helpers in `src/status.ts` (`ok()` and `fail(reason)`) are intentionally left unimplemented stubs that throw `"not implemented"`, so the committed test suite in `tests/status.test.ts` fails out of the box. A correct implementation that satisfies the tests' exact return-shape, immutability, and reason-validation requirements turns the suite green.
