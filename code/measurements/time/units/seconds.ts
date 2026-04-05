import { Immutable_Time_Unit } from "../base/immutable_time_unit.ts";
import { Mutable_Time_Unit } from "../base/mutable_time_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";
import { Immutable_Milliseconds } from "./milliseconds.ts";
import { Immutable_Minutes } from "./minutes.ts";

export class Immutable_Seconds extends Immutable_Time_Unit {
    public readonly type: string = "second" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Milliseconds {
        return new Immutable_Milliseconds(this.value * 1_000);
    }

    public as_seconds(): Immutable_Seconds {
        return new Immutable_Seconds(this.value);
    }

    public as_minutes(): Immutable_Minutes {
        return new Immutable_Minutes(this.value / 60);
    }

    public as_mutable(): Mutable_Seconds {
        return new Mutable_Seconds(this.value);
    }
}

export class Mutable_Seconds extends Mutable_Time_Unit {
    public readonly type: string = "second" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Milliseconds {
        return new Immutable_Milliseconds(this.value * 1_000);
    }

    public as_seconds(): Immutable_Seconds {
        return new Immutable_Seconds(this.value);
    }

    public as_minutes(): Immutable_Minutes {
        return new Immutable_Minutes(this.value / 60);
    }

    public as_immutable(): Immutable_Seconds {
        return new Immutable_Seconds(this.value);
    }
}

type Seconds_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Seconds;
    new(value: number, mutability: "mutable"): Mutable_Seconds;
};

export const Seconds = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Seconds(value) : 
        new Immutable_Seconds(value);
} as unknown as Seconds_Constructor;
