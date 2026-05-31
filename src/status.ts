export interface OkStatus { ok: true }
export interface FailStatus { ok: false; reason: string }
export type Status = OkStatus | FailStatus;
export function ok(): OkStatus { throw new Error("not implemented"); }
export function fail(_reason: string): FailStatus { throw new Error("not implemented"); }
