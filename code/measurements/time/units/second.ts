import { Immutable_Time_Unit } from "../base/immutable_time_unit.ts";
import { Mutable_Time_Unit } from "../base/mutable_time_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";
import { Immutable_Millisecond } from "./millisecond.ts";
import { Immutable_Minute } from "./minute.ts";

export class Immutable_Second extends Immutable_Time_Unit {
    public readonly type: string = "second" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Millisecond {
        return new Immutable_Millisecond(this.value * 1_000);
    }

    public as_seconds(): Immutable_Second {
        return new Immutable_Second(this.value);
    }

    public as_minutes(): Immutable_Minute {
        return new Immutable_Minute(this.value / 60);
    }

    public as_mutable(): Mutable_Second {
        return new Mutable_Second(this.value);
    }
}

export class Mutable_Second extends Mutable_Time_Unit {
    public readonly type: string = "second" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Millisecond {
        return new Immutable_Millisecond(this.value * 1_000);
    }

    public as_seconds(): Immutable_Second {
        return new Immutable_Second(this.value);
    }

    public as_minutes(): Immutable_Minute {
        return new Immutable_Minute(this.value / 60);
    }

    public as_immutable(): Immutable_Second {
        return new Immutable_Second(this.value);
    }
}

type Second_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Second;
    new(value: number, mutability: "mutable"): Mutable_Second;
};

export const Second = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Second(value) : 
        new Immutable_Second(value);
} as unknown as Second_Constructor;
