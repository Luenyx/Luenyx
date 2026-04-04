import { Immutable_Time_Unit } from "../base/immutable_time_unit.ts";
import { Mutable_Time_Unit } from "../base/mutable_time_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";
import { Immutable_Millisecond } from "./millisecond.ts";
import { Immutable_Second } from "./second.ts";

export class Immutable_Minute extends Immutable_Time_Unit {
    public readonly type: string = "minute" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Millisecond {
        return new Immutable_Millisecond(this.value * 60_000);
    }

    public as_seconds(): Immutable_Second {
        return new Immutable_Second(this.value * 60);
    }

    public as_minutes(): Immutable_Minute {
        return new Immutable_Minute(this.value);
    }

    public as_mutable(): Mutable_Minute {
        return new Mutable_Minute(this.value);
    }
}

export class Mutable_Minute extends Mutable_Time_Unit {
    public readonly type: string = "minute" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Millisecond {
        return new Immutable_Millisecond(this.value * 60_000);
    }

    public as_seconds(): Immutable_Second {
        return new Immutable_Second(this.value * 60);
    }

    public as_minutes(): Immutable_Minute {
        return new Immutable_Minute(this.value);
    }

    public as_immutable(): Immutable_Minute {
        return new Immutable_Minute(this.value);
    }
}

type Minute_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Minute;
    new(value: number, mutability: "mutable"): Mutable_Minute;
};

export const Minute = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Minute(value) : 
        new Immutable_Minute(value);
} as unknown as Minute_Constructor;
