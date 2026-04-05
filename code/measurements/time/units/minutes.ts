import { Immutable_Time_Unit } from "../base/immutable_time_unit.ts";
import { Mutable_Time_Unit } from "../base/mutable_time_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";
import { Immutable_Milliseconds } from "./milliseconds.ts";
import { Immutable_Seconds } from "./seconds.ts";

export class Immutable_Minutes extends Immutable_Time_Unit {
    public readonly type: string = "minute" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Milliseconds {
        return new Immutable_Milliseconds(this.value * 60_000);
    }

    public as_seconds(): Immutable_Seconds {
        return new Immutable_Seconds(this.value * 60);
    }

    public as_minutes(): Immutable_Minutes {
        return new Immutable_Minutes(this.value);
    }

    public as_mutable(): Mutable_Minutes {
        return new Mutable_Minutes(this.value);
    }
}

export class Mutable_Minutes extends Mutable_Time_Unit {
    public readonly type: string = "minute" as const;

    public constructor(number: number) {super(number);}

    public as_milliseconds(): Immutable_Milliseconds {
        return new Immutable_Milliseconds(this.value * 60_000);
    }

    public as_seconds(): Immutable_Seconds {
        return new Immutable_Seconds(this.value * 60);
    }

    public as_minutes(): Immutable_Minutes {
        return new Immutable_Minutes(this.value);
    }

    public as_immutable(): Immutable_Minutes {
        return new Immutable_Minutes(this.value);
    }
}

type Minutes_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Minutes;
    new(value: number, mutability: "mutable"): Mutable_Minutes;
};

export const Minutes = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Minutes(value) : 
        new Immutable_Minutes(value);
} as unknown as Minutes_Constructor;
