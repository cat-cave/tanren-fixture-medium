// Status helpers.
//
// Contract (see tests/status.test.ts for the exact, authoritative spec):
//
//   ok(): OkStatus
//     - Returns exactly { ok: true }.
//     - The returned object MUST be frozen (immutable) so callers cannot
//       mutate a shared success sentinel.
//
//   fail(reason: string): FailStatus
//     - Returns exactly { ok: false, reason } where `reason` is the input
//       with surrounding whitespace trimmed.
//     - MUST throw on an empty or whitespace-only reason: a failure with no
//       explanation is not a valid failure.
//     - The returned object MUST be frozen (immutable).

export interface OkStatus {
  ok: true;
}

export interface FailStatus {
  ok: false;
  reason: string;
}

export type Status = OkStatus | FailStatus;

export function ok(): OkStatus {
  return Object.freeze({ ok: true });
}

export function fail(reason: string): FailStatus {
  const trimmedReason = reason.trim();

  if (trimmedReason.length === 0) {
    throw new Error("failure reason must not be empty");
  }

  return Object.freeze({ ok: false, reason: trimmedReason });
}
