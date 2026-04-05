import { Value } from "../../../core/value.ts";
import type { Immutable_Milliseconds } from "../units/milliseconds.ts";
import type { Immutable_Seconds } from "../units/seconds.ts";
import type { Immutable_Minutes } from "../units/minutes.ts";

export abstract class Time_Unit extends Value {
    protected constructor(value: number) {super(value);}

    public abstract as_milliseconds(): Immutable_Milliseconds;

    public abstract as_seconds(): Immutable_Seconds;

    public abstract as_minutes(): Immutable_Minutes;
}
