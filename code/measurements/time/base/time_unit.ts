import { Value } from "../../../core/value.ts";
import type { Immutable_Millisecond } from "../units/millisecond.ts";
import type { Immutable_Second } from "../units/second.ts";
import type { Immutable_Minute } from "../units/minute.ts";

export abstract class Time_Unit extends Value {
    protected constructor(value: number) {super(value);}

    public abstract as_milliseconds(): Immutable_Millisecond;

    public abstract as_seconds(): Immutable_Second;

    public abstract as_minutes(): Immutable_Minute;
}
