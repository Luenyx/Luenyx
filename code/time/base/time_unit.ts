import type { Immutable_Millisecond } from "../units/millisecond.ts";

abstract class Time_Unit {
    public abstract readonly type: string;
    public abstract readonly mutability: "immutable" | "mutable";
    protected readonly value: number;

    protected constructor(value: number) {
        this.value = value;
    }

    public abstract as_milliseconds(): Immutable_Millisecond;
}

export abstract class Immutable_Time_Unit extends Time_Unit {
    public readonly mutability: "immutable" = "immutable" as const;
}

export abstract class Mutable_Time_Unit extends Time_Unit {
    public readonly mutability: "mutable" = "mutable" as const;
}
