export interface OkStatus { ok: true }
export interface FailStatus { ok: false; reason: string }
export type Status = OkStatus | FailStatus;
export function ok(): OkStatus {
  return Object.freeze({ ok: true });
}

export function fail(reason: string): FailStatus {
  const trimmedReason = reason.trim();

  if (trimmedReason.length === 0) {
    throw new Error("Failure reason must not be empty");
  }

  return Object.freeze({ ok: false, reason: trimmedReason });
}
