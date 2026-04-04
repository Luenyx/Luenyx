import { Immutable_Time_Unit } from "../base/immutable_time_unit.ts";
import { Mutable_Time_Unit } from "../base/mutable_time_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";
import { Immutable_Second } from "./second.ts";
import { Immutable_Minute } from "./minute.ts";

export class Immutable_Millisecond extends Immutable_Time_Unit {
    public readonly type: string = "millisecond" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Millisecond {
        return new Immutable_Millisecond(this.value);
    }

    public as_seconds(): Immutable_Second {
        return new Immutable_Second(this.value / 1_000);
    }

    public as_minutes(): Immutable_Minute {
        return new Immutable_Minute(this.value / 60_000);
    }

    public as_mutable(): Mutable_Millisecond {
        return new Mutable_Millisecond(this.value);
    }
}

export class Mutable_Millisecond extends Mutable_Time_Unit {
    public readonly type: string = "millisecond" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Millisecond {
        return new Immutable_Millisecond(this.value);
    }

    public as_seconds(): Immutable_Second {
        return new Immutable_Second(this.value / 1_000);
    }

    public as_minutes(): Immutable_Minute {
        return new Immutable_Minute(this.value / 60_000);
    }

    public as_immutable(): Immutable_Millisecond {
        return new Immutable_Millisecond(this.value);
    }
}

type Millisecond_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Millisecond;
    new(value: number, mutability: "mutable"): Mutable_Millisecond;
};

export const Millisecond = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Millisecond(value) : 
        new Immutable_Millisecond(value);
} as unknown as Millisecond_Constructor;
