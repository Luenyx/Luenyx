import { Immutable_Time_Unit } from "../base/immutable_time_unit.ts";
import { Mutable_Time_Unit } from "../base/mutable_time_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";
import { Immutable_Seconds } from "./seconds.ts";
import { Immutable_Minutes } from "./minutes.ts";

export class Immutable_Milliseconds extends Immutable_Time_Unit {
    public readonly type: string = "millisecond" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Milliseconds {
        return new Immutable_Milliseconds(this.value);
    }

    public as_seconds(): Immutable_Seconds {
        return new Immutable_Seconds(this.value / 1_000);
    }

    public as_minutes(): Immutable_Minutes {
        return new Immutable_Minutes(this.value / 60_000);
    }

    public as_mutable(): Mutable_Milliseconds {
        return new Mutable_Milliseconds(this.value);
    }
}

export class Mutable_Milliseconds extends Mutable_Time_Unit {
    public readonly type: string = "millisecond" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Milliseconds {
        return new Immutable_Milliseconds(this.value);
    }

    public as_seconds(): Immutable_Seconds {
        return new Immutable_Seconds(this.value / 1_000);
    }

    public as_minutes(): Immutable_Minutes {
        return new Immutable_Minutes(this.value / 60_000);
    }

    public as_immutable(): Immutable_Milliseconds {
        return new Immutable_Milliseconds(this.value);
    }
}

type Milliseconds_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Milliseconds;
    new(value: number, mutability: "mutable"): Mutable_Milliseconds;
};

export const Milliseconds = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Milliseconds(value) : 
        new Immutable_Milliseconds(value);
} as unknown as Milliseconds_Constructor;
