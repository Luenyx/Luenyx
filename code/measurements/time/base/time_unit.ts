import { Value } from "../../../core/value.ts";
import type { Immutable_Millisecond } from "../units/millisecond.ts";

export abstract class Time_Unit extends Value {
    protected constructor(value: number) {super(value);}

    public abstract as_milliseconds(): Immutable_Millisecond;
}
